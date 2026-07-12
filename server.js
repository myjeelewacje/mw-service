const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const root = __dirname;
const port = Number(process.env.PORT) || 8080;
const maxBodyBytes = 1024 * 1024;
const contentTypes = {
  ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8", ".json": "application/json; charset=utf-8",
  ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg",
  ".webp": "image/webp", ".svg": "image/svg+xml", ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8"
};

function sendJson(res, status, data) {
  res.writeHead(status, {"Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store"});
  res.end(JSON.stringify(data));
}

function readJson(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.setEncoding("utf8");
    req.on("data", chunk => {
      body += chunk;
      if (Buffer.byteLength(body) > maxBodyBytes) {
        reject(Object.assign(new Error("Request too large"), {status: 413}));
        req.destroy();
      }
    });
    req.on("end", () => {
      try { resolve(body ? JSON.parse(body) : {}); }
      catch { reject(Object.assign(new Error("Invalid JSON"), {status: 400})); }
    });
    req.on("error", reject);
  });
}

function clean(value, max = 2000) {
  return String(value || "").trim().slice(0, max);
}

function escapeHtml(value) {
  return clean(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
}

function validEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

async function handleContact(req, res) {
  try {
    const body = await readJson(req);
    const name = clean(body.name || body.naam, 200);
    const phone = clean(body.phone || body.telefoon, 100);
    const email = clean(body.email, 320);
    const service = clean(body.service || body.dienst, 300);
    const message = clean(body.message || body.bericht, 5000);
    const page = clean(body.page || req.headers.referer || "", 1000);

    if (!name) return sendJson(res, 400, {error: "Name is required."});
    if (!phone && !email) return sendJson(res, 400, {error: "Phone or email is required."});
    if (email && !validEmail(email)) return sendJson(res, 400, {error: "Email is invalid."});

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured.");
      return sendJson(res, 503, {error: "Email service is not configured."});
    }

    const date = new Intl.DateTimeFormat("nl-BE", {
      dateStyle: "full", timeStyle: "long", timeZone: "Europe/Brussels"
    }).format(new Date());
    const text = [
      "Naam: " + name, "Telefoon: " + (phone || "-"), "E-mail: " + (email || "-"),
      "Dienst: " + (service || "-"), "Bericht: " + (message || "-"),
      "Pagina: " + (page || "-"), "Datum: " + date
    ].join("\n");
    const html = [
      "<h2>Nieuwe aanvraag via MW Service website</h2>",
      "<p><strong>Naam:</strong> " + escapeHtml(name) + "</p>",
      "<p><strong>Telefoon:</strong> " + escapeHtml(phone || "-") + "</p>",
      "<p><strong>E-mail:</strong> " + escapeHtml(email || "-") + "</p>",
      "<p><strong>Dienst:</strong> " + escapeHtml(service || "-") + "</p>",
      "<p><strong>Bericht:</strong><br>" + escapeHtml(message || "-").replace(/\n/g, "<br>") + "</p>",
      "<p><strong>Pagina:</strong> " + escapeHtml(page || "-") + "</p>",
      "<p><strong>Datum:</strong> " + escapeHtml(date) + "</p>"
    ].join("");

    const payload = {
      from: process.env.FROM_EMAIL || "MW Service <noreply@mw-service.be>",
      to: [process.env.LEADS_TO_EMAIL || "contact@mw-service.be"],
      subject: "Nieuwe aanvraag via MW Service website", text, html
    };
    if (email) payload.reply_to = email;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {Authorization: "Bearer " + apiKey, "Content-Type": "application/json"},
      body: JSON.stringify(payload)
    });
    if (!response.ok) {
      console.error("Resend error:", response.status, await response.text());
      return sendJson(res, 502, {error: "Email could not be sent."});
    }
    const result = await response.json();
    console.log("Contact email sent:", result.id);
    return sendJson(res, 200, {ok: true});
  } catch (error) {
    console.error("Contact request error:", error.message);
    return sendJson(res, error.status || 500, {error: "Unexpected server error."});
  }
}

function serveStatic(req, res) {
  let pathname;
  try { pathname = decodeURIComponent(new URL(req.url, "http://localhost").pathname); }
  catch { res.writeHead(400); return res.end("Bad request"); }

  if (pathname.endsWith("/")) pathname += "index.html";
  const filePath = path.resolve(root, pathname.replace(/^\/+/, ""));
  if (filePath !== root && !filePath.startsWith(root + path.sep)) {
    res.writeHead(403); return res.end("Forbidden");
  }

  fs.stat(filePath, (error, stats) => {
    if (error || !stats.isFile()) {
      res.writeHead(404, {"Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store"});
      return res.end("Not found");
    }
    res.writeHead(200, {
      "Content-Type": contentTypes[path.extname(filePath).toLowerCase()] || "application/octet-stream",
      "Cache-Control": "no-store, no-cache, must-revalidate", Pragma: "no-cache", Expires: "0"
    });
    if (req.method === "HEAD") return res.end();
    fs.createReadStream(filePath).pipe(res);
  });
}

const server = http.createServer((req, res) => {
  const pathname = new URL(req.url, "http://localhost").pathname;
  if (req.method === "POST" && pathname === "/api/contact") return handleContact(req, res);
  if (req.method === "GET" || req.method === "HEAD") return serveStatic(req, res);
  res.writeHead(405, {Allow: "GET, HEAD, POST"});
  res.end("Method not allowed");
});

server.listen(port, "0.0.0.0", () => console.log("MW Service server listening on port " + port));

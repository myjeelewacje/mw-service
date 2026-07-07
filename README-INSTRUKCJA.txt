POPRAWKA MW SERVICE — LOGO I BRAK OVERLAY

Poprawione:
- nowe czystsze logo MW Service
- 4 boksy nie nachodzą już na sekcję główną
- hero ma normalny układ i odstępy
- zdjęcia zostają w paczce
- dalej bez npm / Next / TypeScript
- Railway działa przez Docker + nginx z poprawnym PORT

CO ZROBIĆ:
1. Wejdź do folderu repo mw-service.
2. Usuń wszystko ze środka, ale NIE usuwaj ukrytego folderu .git.
3. Rozpakuj ten ZIP.
4. Wklej zawartość ZIP-a bezpośrednio do folderu mw-service.

Musi być:
mw-service/index.html
mw-service/style.css
mw-service/script.js
mw-service/Dockerfile
mw-service/nginx.conf.template
mw-service/railway.toml
mw-service/images/
mw-service/projecten/

Nie może być:
package.json
package-lock.json
src/
tsconfig.json
nginx.conf

GitHub Desktop:
Summary:
Fix logo and remove hero overlay

Commit to main
Push origin

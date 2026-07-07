MW SERVICE — WERSJA JAK ZAAKCEPTOWANY PODGLĄD

Zrobione:
- ciemny hero jak w zaakceptowanym podglądzie
- zdjęcie w tle jest ostre i widoczne, bez rozmycia
- góra/header jest biała, ale przezroczysta
- formularz jest ciemny/przezroczysty
- zielone przyciski są mocniejsze
- logo zostaje czarne, bez tła i bez podmian
- cache wyłączony w nginx
- CSS/logo podbite do v8

CO ZROBIĆ:
1. Wejdź do folderu repo mw-service.
2. Usuń wszystko ze środka, ale NIE usuwaj ukrytego folderu .git.
3. Rozpakuj ten ZIP.
4. Wklej zawartość ZIP-a bezpośrednio do folderu mw-service.

Musi być:
mw-service/index.html
mw-service/style-v8.css
mw-service/script-v4.js
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
Apply approved dark hero design

Commit to main
Push origin

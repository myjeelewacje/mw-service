OSTATECZNA WERSJA STATYCZNA — BEZ NPM, NEXT, REACT I TYPESCRIPT

Ta paczka usuwa cały problem z npm install:
- nie ma package.json
- nie ma npm install
- nie ma Next.js
- nie ma React
- nie ma TypeScript
- Railway buduje stronę przez Dockerfile i nginx

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
mw-service/nginx.conf
mw-service/railway.toml
mw-service/images/
mw-service/projecten/

Nie może być:
mw-service/package.json
mw-service/src/
mw-service/tsconfig.json
mw-service/node_modules/

GitHub Desktop:
Summary:
Replace MW Service with static Docker site

Commit to main
Push origin

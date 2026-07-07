POPRAWIONA WERSJA STRONY MW SERVICE

Poprawki:
- zdjęcia są w paczce
- hero ma większą wysokość
- karty z benefitami nie nachodzą na formularz
- dalej brak npm / Next / TypeScript
- Railway działa przez Docker + nginx z poprawnym portem PORT

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
Fix MW Service layout and images

Commit to main
Push origin

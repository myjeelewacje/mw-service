TWARDA POPRAWKA — BEZ CACHE I BEZ OVERLAY

Co zmieniłem:
- nowy plik CSS: style-v4.css?v=4, żeby przeglądarka nie trzymała starego stylu
- nowy plik JS: script-v4.js?v=4
- 4 boksy są w osobnej sekcji pod hero, nie mogą nachodzić na formularz
- logo uproszczone i bardziej czytelne
- dalej bez npm / Next / TypeScript
- Railway działa przez Docker + nginx

CO ZROBIĆ:
1. Wejdź do folderu repo mw-service.
2. Usuń wszystko ze środka, ale NIE usuwaj ukrytego folderu .git.
3. Rozpakuj ten ZIP.
4. Wklej zawartość ZIP-a bezpośrednio do folderu mw-service.

Musi być:
mw-service/index.html
mw-service/style-v4.css
mw-service/script-v4.js
mw-service/Dockerfile
mw-service/nginx.conf.template
mw-service/railway.toml
mw-service/images/
mw-service/projecten/

GitHub Desktop:
Summary:
Hard fix layout cache and logo

Commit to main
Push origin

Po deployu odśwież stronę przez Ctrl+F5.

NAPRAWA PORTU RAILWAY

Problem:
Deploy jest zielony, ale strona pokazuje "Application failed to respond".

Powód:
Nginx słuchał na porcie 80, a Railway przekazuje własny port w zmiennej PORT.

Podmień/dodaj w repo mw-service:
- Dockerfile
- nginx.conf.template
- railway.toml

Usuń stary plik:
- nginx.conf

GitHub Desktop:
Summary:
Fix Railway Docker port

Commit to main
Push origin

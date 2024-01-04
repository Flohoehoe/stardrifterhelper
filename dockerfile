# Verwende das offizielle nginx-Image als Basis
FROM nginx:alpine

# Setze das Arbeitsverzeichnis im Container
WORKDIR /usr/share/nginx/html

# Entferne alle Standard-Dateien von nginx
RUN rm -rf ./*

# Kopiere die Website-Dateien in das Container-Verzeichnis
COPY . .

# Exponiere Port 80
EXPOSE 80

# Starte nginx im Vordergrund
CMD ["nginx", "-g", "daemon off;"]

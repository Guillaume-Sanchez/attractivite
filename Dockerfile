# Étape 1 : Build de l'application Vite
FROM node:20-alpine AS builder
WORKDIR /app

# Installation des dépendances
COPY package*.json ./
RUN npm ci

# Copie du code source et build
COPY . .
RUN npm run build

# Étape 2 : Serveur de production Nginx
FROM nginx:alpine

# Suppression de la page par défaut de Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copie des fichiers compilés depuis l'étape 1
COPY --from=builder /app/dist /usr/share/nginx/html

# Optionnel : Ajout d'une configuration Nginx personnalisée si vous gérez des routes React plus tard
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
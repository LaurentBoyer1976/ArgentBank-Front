# Étape 1 : Utiliser une image Node.js pour construire l'application
FROM node:18 AS build

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le code source dans le conteneur
COPY . .

# Construire l'application pour la production
RUN npm run build

# Étape 2 : Utiliser une image Nginx pour servir l'application
FROM nginx:alpine

# Copier les fichiers construits dans le dossier Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Commande par défaut pour démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]
# Étape 1 : Installer les dépendances de développement
FROM node:20-bullseye-slim AS development-dependencies-env
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --no-cache

# Étape 2 : Installer les dépendances de production
FROM node:20-bullseye-slim AS production-dependencies-env
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --no-cache --omit=dev

# Étape 3 : Construire l'application
FROM node:20-bullseye-slim AS build-env
WORKDIR /app
COPY . .
COPY --from=development-dependencies-env /app/node_modules ./node_modules
RUN npm run build

# Étape 4 : Image finale pour exécuter l'application
FROM node:20-bullseye-slim
WORKDIR /app
COPY package.json package-lock.json ./
COPY --from=production-dependencies-env /app/node_modules ./node_modules
COPY --from=build-env /app/build ./build
EXPOSE 3000
CMD ["npm", "run", "start"]
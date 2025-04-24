# Argent Bank Frontend

Une application moderne en phase de production, construite avec React, React Router et Redux Toolkit.

## Fonctionnalités

- 🚀 Rendu côté client avec React
- ⚡️ Hot Module Replacement (HMR) pour un développement rapide
- 📦 Optimisation et bundling des assets
- 🔄 Gestion de l'état global avec Redux Toolkit
- 📖 [Documentation React Router](https://reactrouter.com/)

---

## Prise en main

### Installation

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/votre-utilisateur/argent-bank-frontend.git
   cd argent-bank-frontend
   ```

2. Installez les dépendances nécessaires :
   ```bash
   npm install
   ```

### Lancement du projet

Pour démarrer l'application en mode développement, utilisez la commande suivante :
```bash
npm run dev
```

L'application sera accessible à l'adresse suivante : [http://localhost:3001](http://localhost:3001).

---

## Scripts disponibles

- **`npm run dev`** : Lance l'application en mode développement avec HMR.
- **`npm run build`** : Compile l'application pour la production.
- **`npm run preview`** : Prévisualise l'application compilée en production.

---

## Structure du projet

Voici un aperçu de la structure des fichiers principaux :

```
ArgentBank-Front/
├── public/               # Fichiers statiques
├── src/
│   ├── components/       # Composants React réutilisables
│   ├── pages/            # Pages principales de l'application
│   ├── store/            # Gestion de l'état avec Redux Toolkit
│   ├── styles/           # Fichiers CSS pour le styling
│   ├── utils/            # Fonctions utilitaires
│   └── App.jsx           # Point d'entrée principal
├── package.json          # Dépendances et scripts
└── README.md             # Documentation
```

---

## Dépendances principales

- **React** : Bibliothèque pour construire l'interface utilisateur.
- **React Router** : Gestion des routes.
- **Redux Toolkit** : Gestion simplifiée de l'état global.

---

## API Backend

L'application communique avec l'API backend suivante : [Argent Bank API](https://github.com/votre-utilisateur/argent-bank-backend).

Assurez-vous que l'API backend est configurée et en cours d'exécution avant de lancer le frontend.

---

## Contribution

Les contributions sont les bienvenues ! Suivez ces étapes pour contribuer :

1. Forkez le projet.
2. Créez une branche pour votre fonctionnalité : `git checkout -b feature/ma-fonctionnalite`.
3. Commitez vos modifications : `git commit -m "Ajout de ma fonctionnalité"`.
4. Poussez votre branche : `git push origin feature/ma-fonctionnalite`.
5. Ouvrez une Pull Request.

---

## Licence

Ce projet est sous licence MIT. Consultez le fichier `LICENSE` pour plus d'informations.

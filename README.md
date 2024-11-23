📖 Gestion des Recettes et Utilisateurs - API REST
Cette application est une API REST qui permet de gérer les utilisateurs et leurs recettes. Les fonctionnalités incluent l'inscription et la connexion des utilisateurs, ainsi que les opérations CRUD (Créer, Lire, Mettre à jour, Supprimer) sur les recettes.

🚀 Fonctionnalités
Utilisateurs :
Inscription d'un utilisateur.
Connexion avec génération d'un jeton JWT.
Récupération des informations d'un utilisateur.

Recettes :
Création d'une recette associée à un utilisateur.
Lecture des recettes (toutes ou par utilisateur).
Mise à jour d'une recette.
Suppression d'une recette.

🛠️ Technologies utilisées
Backend : Node.js (Express)
Base de données : MySQL
ORM : Prisma
Sécurité :
Hashage des mots de passe avec bcryptjs
Authentification via jsonwebtoken (JWT)
Autres dépendances :
body-parser : Pour analyser les requêtes HTTP.
cors : Pour autoriser les requêtes provenant de différents domaines.

📂 Structure du projet
bash
Copier le code
├── prisma/
│   ├── schema.prisma       # Modèle de la base de données
├── controllers/
│   ├── utilisateurController.js  # Gestion des utilisateurs
│   ├── recetteController.js      # Gestion des recettes
├── routes/
│   ├── utilisateurRoutes.js      # Routes pour les utilisateurs
│   ├── recetteRoutes.js          # Routes pour les recettes
├── app.js                        # Initialisation de l'application
├── .env                              # Variables d'environnement
├── package.json                      # Dépendances et scripts
├── README.md                         # Documentation du projet
🔧 Installation et utilisation
Prérequis
Node.js (version 16+)
MySQL
Étapes
Cloner le dépôt :

bash
Copier le code
git clone https://github.com/nom-utilisateur/nom-projet.git
cd nom-projet
Installer les dépendances :

bash
Copier le code
npm install
Configurer l'environnement :
Créez un fichier .env avec les informations suivantes :

env
Copier le code
DATABASE_URL="mysql://ednambeng_recet:oyougou2024@mysql-ednambeng.alwaysdata.net:3306/ednambeng_gesres"
CLE_SECRETE_JWT="wtz2"
Initialiser la base de données :

bash
Copier le code
npx prisma migrate dev --name init
Lancer l'application :

bash
Copier le code
npm run dev
Accéder à l'API :
Par défaut, l'application est accessible sur http://localhost:3000.

📚 Points d'accès API (Endpoints)
Utilisateurs
POST /api/inscription : Inscription d'un utilisateur.
POST /api/connexion : Connexion d'un utilisateur.
Recettes
GET /api/recettes : Récupérer toutes les recettes.
POST /api/recette : Créer une recette.
PUT /recette/:id : Mettre à jour une recette.
DELETE /recette/:id : Supprimer une recette.

🗃️ Modèle de base de données
Table utilisateurs
Champ	Type	Description
id	INT (PK)	Identifiant unique
nom	VARCHAR(255)	Nom de l'utilisateur
email	VARCHAR(255)	Adresse email (unique)
mot_de_passe	VARCHAR(255)	Mot de passe hashé
cree_a	TIMESTAMP	Date de création

Table recettes
Champ	Type	Description
id	INT (PK)	Identifiant unique
titre	VARCHAR(255)	Titre de la recette
description	TEXT	Description de la recette
ingredients	JSON	Liste des ingrédients (avec quantités)
etapes	JSON	Liste des étapes de préparation
image	VARCHAR(255)	Chemin ou URL de l'image
temps_cuisson	INT	Temps de cuisson (minutes)
minuteur	INT	Minuteur (secondes)
portions	INT	Nombre de portions
utilisateur_id	INT (FK)	Référence à l'utilisateur

🛡️ Sécurité
Les mots de passe sont hashés avec bcryptjs.
L'authentification utilise des tokens JWT sécurisés.

🧪 Tests avec Postman
Importer le fichier JSON de collection Postman (disponible dans le projet).
Exemple de requêtes :
Inscription d'un utilisateur
Création d'une recette
Récupération des recettes

🧑‍💻 Contributeurs
Mallet-PM
Contributions bienvenues ! N'hésitez pas à soumettre des issues ou des pull requests.

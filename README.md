🎓 SmartLearn MVP
SmartLearn est une plateforme e-learning numérique conçue pour offrir un apprentissage structuré, accessible et monétisable.
Ce MVP constitue la première version fonctionnelle du projet, visant à valider le marché et générer des revenus tout en posant les bases d’un écosystème éducatif évolutif.
🚀 Vision du projet
SmartLearn a pour mission de rendre l’apprentissage plus clair, progressif et accessible grâce à une approche pédagogique centrée sur la compréhension réelle des concepts, notamment en mathématiques et en informatique.
La plateforme permet aux apprenants de :
accéder à des cours structurés,
apprendre à leur rythme,
suivre leur progression,
accéder à des contenus premium via abonnement.
🧩 Fonctionnalités du MVP
👤 Gestion des utilisateurs
Inscription et connexion sécurisées
Authentification via JWT
Gestion du profil utilisateur
📚 Gestion des cours
Liste des cours disponibles
Consultation des leçons (texte + vidéo)
Organisation structurée des contenus
💳 Monétisation
Système d’abonnement payant
Intégration des paiements via Flutterwave
Protection des contenus premium
📊 Suivi utilisateur
Accès aux contenus débloqués
Progression dans les cours
Expérience personnalisée
🏗️ Architecture du projet
Copier le code

Smartlearn1.0/
 ├── smartlearn-frontend   # Application React (interface utilisateur)
 └── smartlearn-backend    # API Node.js/Express + MongoDB
🔹 Frontend
React
Architecture modulaire
Gestion d’état avec Context API
Communication avec API backend
🔹 Backend
Node.js + Express
MongoDB avec Mongoose
Authentification JWT
Gestion abonnements & paiements
🛠️ Stack technologique
Frontend
React
Vite / Create React App
Axios / Fetch API
CSS / UI moderne
Backend
Node.js
Express.js
MongoDB Atlas
Mongoose
JWT (authentification)
Flutterwave (paiements)
⚙️ Installation & configuration
1️⃣ Cloner le dépôt
Copier le code
Bash
git clone https://github.com/<username>/Smartlearn1.0.git
cd Smartlearn1.0
2️⃣ Backend
Copier le code
Bash
cd smartlearn-backend
npm install
Créer un fichier .env :
Copier le code
Env
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
FLUTTERWAVE_SECRET_KEY=your_flutterwave_key
Lancer le serveur :
Copier le code
Bash
npm run dev
3️⃣ Frontend
Copier le code
Bash
cd smartlearn-frontend
npm install
npm run dev
🔐 Sécurité
Authentification JWT sécurisée
Protection des routes premium
Validation des paiements côté serveur
Gestion des erreurs centralisée
📈 Objectifs du MVP
✅ Valider l’intérêt du marché
✅ Générer les premiers revenus
✅ Tester l’expérience utilisateur
✅ Poser les bases d’une plateforme scalable
🔮 Évolutions prévues
Quiz interactifs et évaluations
Recommandations personnalisées
Application mobile
Communauté d’apprentissage
Certifications numériques
🤝 Contribution
Les contributions sont les bienvenues pour améliorer SmartLearn.
Fork le projet
Crée une branche (feature/amélioration)
Commit tes modifications
Ouvre une Pull Request
📄 Licence
Ce projet est sous licence MIT — libre d’utilisation et de modification.
👤 Auteur
SmartLearn Project
Plateforme éducative numérique dédiée à un apprentissage structuré et accessible.
⭐ Soutenir le projet
Si tu trouves ce projet utile :
⭐ Ajoute une étoile sur GitHub
📢 Partage-le
🤝 Contribue à son amélioration

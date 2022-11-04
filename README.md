# INSTALLATION DU PROJET SUR UN NOUVEAU POSTE

Tout d'abord, clonez le repos git sur votre dossier à l'aide de la commande : git clone `Lien du repos`

## BACKEND `npm install`

Rendez vous à la source du dossier backend, et lancez la commande `npm install` dans le terminal pour installer toutes les dépendances nécessaires.

## BACKEND `images`

Créez ensuite un dossier `images` à la racine du dossier backend (toutes les images enregistrées par les utilisateurs seront sauvgardées dans ce dossier).

## BACKEND `fichier .env`

Créez ensuite un fichier `.env` à la racine du dossier backend. 

Dans celui-ci, écrivez ces 2 lignes :

MONGO_URI = `Ici ajoutez votre chaîne de connexion fourni par mongoDB qui contiendra vos identifiants`
JWT_KEY = RANDOM_TOKEN_SECRET

### FRONT `npm install`

Rendez vous maintenant dans la partie front à la racine du dossier.
Effectuez comme précédemment un `npm install` dans le terminal pour installer toutes les dépendances nécessaires.

#### LANCEMENT DU PROJET

Remettez vous à la racine du dossier backend et lancez la commande suivante dans le terminal `nodemon server.js`
Maintenant, mettez vous à la racine du dossier front et lancez la commande suivante dans le terminal `npm start`

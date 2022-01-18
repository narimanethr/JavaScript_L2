TITRE DU PROJET : Starship
VERSION ou DATE : 20/04/2021
AUTEURS :narimane tahir

 ## Présentation du tp: ## 

L'objectif est de réaliser un jeu vidéo simple dans lequel le joueur contrôle à l'aide du clavier le déplacement vertical d'un vaisseau situé sur la gauche de l'écran.
Des soucoupes volantes arrivent de la droite de l'écran et le joueur doit les détruire en leur tirant dessus.
A chaque tir réussi le joueur marque des points, à l'inverse si un vaisseau parvient à passer sans être détruit, le joueur perd des points.

## Installation des fichiers nécessaires au projet: ##
* recupérer les fichier du tp.
* Installer les modules Node.js avec la commande npm install, pour cela:
dans le terminal placez-vous dans le dossier contenant les fichiers du tp.
ensuite  exécutez la commande:
```
npm install
```
## produire le bundle ##
pour produire un bundle (générer un dossier dist/ et son contenu avec un premier bundle C'est ce dossier qui contiendra le travail à utiliser):
dans le terminal en plaçant dans le dossier contenant les fichiers du tp on eécute la commande:
```
npm run build
```

## exécuter le projet ##
pour exécuter le projet vous devriez ouvrir avec un navigateur le fichier index.html  qui se situe dans le dossier dist qui a été généré.

on peux produire un bundle et lancer le programme avec la commande :
```
 npm run dev-server
```
(ce mode est un outil de développement qui nous permetre de sauvegarder une modification et visualiser immédiatement le résultat dans le navigateur,mais il génere pas le dossier dist). 


 
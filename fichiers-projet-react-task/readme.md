TITRE DU PROJET : TaskApp (React)
VERSION ou DATE : 28/05/2021
AUTEURS : narimane tahir

 ## Présentation du tp: ## 
Ce projet est une mise en oeuvre d'un block notes qui permet de creer des taches 
qui seront definies par une description, une durée de rélisation et un niveau de priorité.

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

## exécuter le projet ##

 Avancement et réalisation du projet:
-Nous avons réussi à créer un block note qui regroupe toutes les taches dont 
nous disposons et qui peut eventuellement en recevoir et en gerer des nouvelles,
cependant la majorités des fonctionnalitées exigées mentionnées sur le cahier des charges
à l'excéption du tri des taches par ordre décroissant des niveaux de priorité.(sort avec fonction taskcompares dans Todo)
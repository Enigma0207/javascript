// var xi = 20;
// var yi = 20;
// resultat= xi+yi
// prompt("resultat");
// alert("resultat");
// console.log(xi==yi);

// var nb1 = 123;
// var nb2 = "123";
// console.log(nb1 == nb2);// retourne TRUE

// l'opérateur de comparaison === signifie 'strictement égal à'
// il permet de vérifier la VALEUR et le type
// console.log(nb1 === nb2);// retourne FALSE

// -- L'opérateur != signifie 'différent de ... en VALEUR'
// console.log(nb1 != nb2);// retourne FALSE

// -- L'opérateur !== signifie 'strictement différent de ... en VALEUR et en TYPE'
// console.log(nb1 !== nb2);// retourne TRUE

// EXERCICE :
// J'arrive sur un Espace Sécurisé au moyen du prénom et de l'âge.
// Je doit saisir mon prénom et mon age pour être authentifié sur le site (les infos sont en BDD, ici dans mes variables prenom et age).
// En cas d'échec une alerte m'informe du problème.
// Si tout se passe bien, un message de bienvenue m'accueille.
// -------------------------------- */
// var prenom, monAge;
// prenom = "Mila";
// monAge = 999;

// 1 -- Demander son prénom à l'utilisateur avec un prompt
// var prenomLogin = prompt("Quel est votre prénom ?");
// 2 -- Je vérifie si le prénom saisi (prenomLogin) correspond à celui en base de donnée (prenom)
// if (prenomLogin === prenom) {
//alert('test');
// 2a. Si tout est ok, je continue la vérification avec l'âge
// 2a1. Demande a mon utilisateur son âge via un PROMPT
// var ageLogin = parseInt(prompt("Votre âge ?"));
// if (ageLogin === monAge) {
//     alert("Bienvenue " + prenomLogin);
// } else {
// 2a2. Si les AGEs ne correspondent pas, je lance une ALERT.
//     alert("Erreur d'âge");
// }
// } else {
// 2b. Sinon, les prénoms ne correspondent pas, je lance une ALERT.
//     alert("Attention, prénom non reconnu");
// }

//  for(var i = 1; i <= 10; i+=1){
//     document.write("<p> instruction :"+ i +" </p>");

// }

// var j=1;
// while(j<=10){
//     document.write("<hr /><p>instruction executée:"+j+" </P>");j++;
// }

// -------------------------
//             EXERCICE
// j'ai 1000€ sur mon compte
// chaque mois j'ajoute 50€
// combien de temps me faut-il pour avoir 2000€ sur mon compte ?

// var monCompte=1000;
// var temps=0
// while(monCompte <2000){
//     monCompte +=50;
//     temps++;
//     document.write("<h3>Sous sur mon compte : " + monCompte + "</h3>");
// document.write("<h3>Jusqu'à 2000€, il me faut : " + temps + " mois</h3>");

// }

// console.log("<p>instruction executée:"+monCompte+"</p>");

// var j = true;
// while (j) {
//   document.write("<p> instruction:" + j + "</P>");
//   j = false;
//   document.write("<p> instruction:" + j + "</P>");
// }
// la prmiere boucle sera true car la valeur de j cest true, et des que on change la valeur
// j en false , il va encore afficher la deuxieme valeur de j qui est false.

//Créer un tableau

// var arr = new Array(element0, element1, ..., elementN);

// var arr = Array(element0, element1, ..., elementN);

// var arr = [element0, element1, ..., elementN];

// var fruits = ["Apple", "Banana"];

// console.log(fruits.length);

// 2

//Accéder(via son index) à un élément du tableau

// var first = fruits[0];

// Apple

// var last = fruits[fruits.length - 1];

// Banana

//Boucler sur un tableau

// var couleurs = ["rouge", "vert", "bleu"];

// for (var i = 0; i < couleurs.length; i++) {

//   console.log(couleurs[i]);

// }

//  AU LIEU DE CREER UN NOUVEAU TABLEAU ON MODIFIE LE CONTENU DU TABLEAU INITIAL
// (ICI AJOUTER UN ELEMENT A LA FIN DU TABLEAU A L AIDE DE LA FONCTION PUSH QUI PREND EN PAREMETRE
// UN ELEMENT ET RETOURNE LA NOUVELLE TAILLE DU TABLEAU)

//Ajouter à la fin du tableau

// var newLength = fruits.push("Orange");

// console.log(fruits);
// console.log(newLength)

// ["Apple", "Banana", "Orange"]

// //Supprimer le dernier élément du tableau
// console.log(fruits);
// //Ajouter à la fin du tableau
// var newLength = fruits.push('Orange');
// // ["Apple", "Banana", "Orange"]

// // var lastElement = fruits.pop();

// // console.log('Tableau fruits après avoir supprimé le dernier élement : ' + fruits);
// // console.log('La taille finale du tableau : ' + fruits.length);
// // console.log(lastElement);
// // console.log('La valeur du dernier élement supprimé : ' + lastElement);

// var lastElement = fruits.pop(); // supprime Orange (à la fin)
// console.log(fruits);
// console.log()

// // ["Apple", "Banana"];

// //Supprimer le premier élément du tableau

// var first = fruits.shift(); // supprime Apple (au début)

// // ["Banana"];

// //Ajouter au début du tableau

// var newLength = fruits.unshift("Strawberry"); // ajoute au début

// // ["Strawberry", "Banana"];

// //Trouver l'index d'un élément dans le tableau

// fruits.push("Mango");

// ["Strawberry", "Banana", "Mango"]

// Créer un tableau

// var pos = fruits.indexOf("Banana");

// // 1

// //Supprimer un élément par son index

// var removedItem = fruits.splice(pos, 1); // supprime 1 élément à la position pos

// // ["Strawberry", "Mango"]

// //Supprimer des éléments à partir d'un index

// var vegetables = ["Cabbage", "Turnip", "Radish", "Carrot"];

// console.log(vegetables);

// ["Cabbage", "Turnip", "Radish", "Carrot"]

// var pos = 1,

//   n = 2;

// var removedItems = vegetables.splice(pos, n);

// // n définit le nombre d'éléments à supprimer,

// // à partir de la position pos

// console.log(vegetables);

// ["Cabbage", "Carrot"] (le tableau d'origine est changé)

// console.log(removedItems);

// ["Turnip", "Radish"] (splice retourne la liste des éléments supprimés)

//Copier un tableau

// var shallowCopy = fruits.slice(); // crée un nouveau tableau qui contient les éléments de fruits

// ["Strawberry", "Mango"]

// Dispose d’un menu contextuel
// Composer

// EXERCICE à travailler encore
// Développez un programme en js :

// 1- Saisir deux valeurs à partir de deux champs de formulaire
// 	-une valeur en string et d'autre en numérique
// 2- Vérifier le type des deux valeurs (si elles sont respectivement bien string et numérique)
// 3- Déclarer(implanter) une fonction qui prend ces deux valeurs en paramètre et elle concatène les deux valeurs en question afin de nous afficher la phrase suivante :
// 	"Je m'appelle ... et j'ai ... ans"

// / la syntaxe suivante effectue deux opérations distinctes en même temps:
// 1. elle exécute la fonction prédefinie de js (prompt) qui nous permet l'affichage d'une boîte de dialogue avec un champs de formulaire afin de saisir des valeurs string ou numérique
// 2. en déclarant une variable, nous pouvons stocker la valeur de retour de la fonction "prompt" saisie à partir du champs de formulaire
// conclusion: toutes les valeurs saisies seront stockées dans notre variable

// var prenom = prompt("Saisir votre prénom :");
// var age = prompt("Saisir votre âge :");

// console.log(prenom, age);

//2- vérification des valeurs
// if (isNaN(prenom) && !isNaN(age)) {
//   affichagePrenomAge(prenom, age);
// }

// function affichagePrenomAge(val1, val2) {
//   var result = "Je m'appelle " + val1 + " et j'ai " + val2 + " ans.";
//   document.write(result);
//   console.log(result);
// }

//  EXERCICE CONVERSION  C° en F° 1 a travailler encore
// Conversion C° en F°
// Ecrivez un programme conversion.js(avec son html correspondant qui pointe sur le fichier.js) qui fait saisir
// une température en degrés celsius, puis affiche le résultat de sa conversion en degrés fahrenheit.

// Rappel : en informatique, la virgule s'écrit avec un point.

// C'est à Daniel Gabriel Fahrenheit que l'on doit l'invention des thermomètres en
//  graduation Fahrenheit.Au début, ses thermomètres sont à l'alcool(1709), mais il remplace rapidement l'alcool par du mercure(1715),
//   permettant à ses outils de mesure de fournir des données comparables.En 1742, un autre scientifique, Anders Celsius, propose une nouvelle
//  graduation au thermomètre.La conversion entre les échelles est donnée par[°F] =[°C] x 9 / 5 + 32.

// ici on declare var, on saisit la valeur dans le formulaire avc prompt on execute la foction et le stock dans la var celcius
// var celcius = prompt("saisir une variable");
// // declare une var farehn, on stoque le resultat de la conversion, dans la val farehn, on coverti celcuis en fareihn grace à la formule
// var fahren = (celcius * (9 / 5) + 32);
// document.write(fahren);
// console.log(fahren);
// console.log(typeof fahren);
// var string = fahren.toString(); c'est pour transformer number to string
// console.log(typeof string);

//  EXERCICE CONVERSION   F° en C° 2

// var farehn = prompt("saisir une variable");
// var celcius = (5 / 9) * (farehn - 32);
// document.write(celcius);

// EXERCICE 3( à travailler encore et encore)
// 1.Implanter une fonction qui s'appelle "affichagePrenom2" qui prend un paramettre de type tableau (de 12 prenom) successivement
// 2. la fonction doit retournerun tableau qui contient deux élements ,le premier sera paramettre tableau et le deuxieme sera la chine de caractere
// nous allons afficher le resultat apartir du console

// déclarer ou implanter une fonctin qui prensd  en paramettre un tableau:
// une fonction qui prend en paramettre un tableau de 12 élement
// var developpeurs = [
//   "Alexis",
//   "Alin",
//   "Cynthia",
//   "Faïssal",
//   "Jérémy",
//   "Karima",
//   "Michel",
//   "Narcis",
//   "Nawal",
//   "Oliver",
//   "Rahim",
//   "Wassila",
// ];

// function affichagePrenom(PrenomsDev) {
//   // utilisation de la boucle "for" afin d'afficher les element du tableau à partir d'une page web
//   for (var i = 0; i < PrenomsDev.length; i++) {
// pour afficher il faut document.write de chaque élements;
// on a  declarer une variable i on affacter  la valeur 0 donc la premiere valeur
// tant que i est < a la taille, afficher la premiere element et apres incrementer et la boucle
// recomence

//     document.write(PrenomsDev[i]);
//   }
// }
// affichagePrenom(developpeurs);
// declarer une fonction
// var developpeurs = [ "Alexis","Alin","Cynthia",  "Faïssal", "Jérémy",  "Karima","Michel", "Narcis", "Nawal",  "Oliver",  "Rahim", "Wassila" ];

// executer le tableau
// afficher developpeurs

// / EXERCICE 3( à travailler encore et encore)
// 1.Implanter une fonction qui s'appelle "affichagePrenom2" qui prend un paramettre de type tableau (de 12 prenom) et une chaine de caractere successivement
// 2. la fonction doit retourner un tableau qui contient deux élements ,le premier sera paramettre tableau et le deuxieme sera la chine de caractere
// nous allons afficher le resultat apartir du console

// function affichage(varArray, varString);

// 1- Déclarer une fonction "additionDesChiffres" qui prend trois paramètres
// 	- premier de type number "paramNum"
//     - deuxième de type string "paramString"
//     - troisème de type tableau "paramArray"

// La fonction aura une valeur de retour

// 2- Grâce à une boucle (le nombre de la condition dans la boucle vient du premier paramètre), la fonction "additionDesChiffres" va remplir le tableau "paramArray" avec les index de la boucle

// 3- on affiche la valeur de retour sur la page web

// function additionDesChiffres(paramNum, paramString, paramArray) {
//   for (var i = 0; i <= paramNum; i++) {
//     paramArray.push(i);
//   }
//   var result = [paramString, paramArray];
//   return result;
// }

// // var valeurRetour = additionDesChiffres(15, "Le résultat de notre fonction : ", []);

// var num = 15;
// var chaineCaractere = "Le résultat de notre fonction : ";
// var tab = [];
// var valeurRetour = additionDesChiffres(num, chaineCaractere, tab);

// document.write(valeurRetour);

// EXERCICE

// PERMUTATION DE 2 VARIABELE 09.06.2023
// Permutation de 2 variables
// Ecrivez un programmepermutation.js ayant initialement le contenu suivant:

// var nombre1 = 5;

// var nombre2 = 3;

// // Tapez votre code ici (sans rien modifier d'autre !)

// console.log(nombre1); // Doit afficher 3

// console.log(nombre2); // Doit afficher 5

// // A l'endroit indiqué par un commentaire, ajoutez le code nécessaire pour inverser les valeurs des deux variables.

// // Il existe plusieurs solutions à cet exercice.
// // Astuce : vous n'êtes pas limité(e) à l'utilisation de deux variables.

// var nombre1 = 5;
// var nombre2 = 3;
// var nombre3;
// // resolution
// var nombre3 = nombre1;
// console.log(nombre3);
// document.write("<p>" + nombre3 + "</p> ");
// // 5
// nombre1 = nombre2;
// console.log(nombre1);
// document.write("<p>" + nombre1 + "</p> ");
// // 3
// nombre2 = nombre3;
// console.log(nombre2);
// document.write("<p>" + nombre2 + "</p>");
// // 5

// EXERCICE 09.06.2023
// 1- saisir un nombre dans un formulaire
// 2- Tant que la valeur est (inférieure ou égale à 3) ou (supérieure ou égale à 120) ou une (string), la boîte de dialogue s'affiche, qui vous demande "Indiquez votre âge".
// 3- Déclarer une variable "majoriteFR" qui comprend la valeur 18;
// 4- Déclarer une fonction "afficheAge" qui prend en paramètre un nombre
// la fonction n'a pas de valeur de retour
// var age = prompt("saisi age");
// while (age <= 3 || age >= 120 || isNaN(age)) {
//   age = prompt("saisi age");
// }
// document.write(age);
// var majorite = 18;

//  EXERCICE 12.06.2026
// 1/ Déclarer 2 variables de type tableau,
// le premier : prenom
// le deuxième adjectif

// 2/ à partir d'un formulaire, remplir le premier.
// Tant que l'on saisi 12 prénoms, le formulaire s'affiche.
// Idem pour le deuxième avec 12 adjectifs.

// 3/ Déclarer une fonction qui prend 2 paramètres de type tableau,
// qui retourne 1 tableau.
//  resolution

// var prenom = [];
// var adjectif = [];
// on doit declarer une autre varialbe pour reccuperer les valeur de prompt;
// var prenomForm;
// while (prenom.length <= 12) {
//   prenomForm = prompt("saisir prenom");
//   prenom.push(prenomForm);

// }
// console.log(prenom);
// document.write("<p>:"+ prenom + "</p>");
// var prenom = [];

// var prenomForm;
// while (prenom.length <= 12) {
//   prenomForm = prompt("remplir le prenom");
//   prenom.push(prenomForm);
// }
// console.log(prenom);
// var adjctif = [];
// var adjectifForm;
// while (adjctif.length <= 10) {
//   adjectifForm = prompt("saisir un adjectif");
//   adjctif.push(adjectifForm);
// }
// console.log(adjctif);
// document.write(adjctif);

// exercice 12.06

// la syntaxe suivante effectue deux operations distictes en meme temps:

// 1. elle execute la fonction prédefinie de js (prompt) qui nous permet d'affichage

// d'une boite de dialogue avec un champs de formulaire afin de saisir des valeurs string ou numérique

// 2. en declarant une variable, nous pouvont stocker la valeur de retour de la fonction prompt saisie à partir du chmps de formulaire

// conclusion: toutes les valeurs saisies seront stockées dans notre variable

// var age = prompt("indiquez votre age:");
// while (age <= 3 || age >= 120 || isNAN(age)) {
//   age = prompt("indiquez votre age");
// }
// var majoriteFR = 18;
// Jeremy DubrulleHier 16:27

// EXERCICE MITRA

//  1 - Saisir un nombre dans un formulaire

//  2 - Tant que la valeur est (inférieure ou égale à 3) ou (supérieure ou égale à 120) ou une (string), la boîte de dialogue s'affiche, qui vous demande "Indiquez votre âge".

//  3 - Déclarer une variable "majoriteFr" qui comprend la valeur 18

//  4 - Déclarer une fonction "afficheAge" qui prend en paramètre un nombre , la fonction n'a pas de valeur de retour

// var age = parseInt(prompt("Saisir un âge"));

// var majoriteFr = 18;

// while (age <= 3 || age >= 120 || isNaN(age)) {

//   age = parseInt(prompt("Indiquez votre âge !"));

// }

// document.write(`cette personne a ${age} ans`);

// Jeremy DubrulleHier 16:27

// EXERCICE MITRA

//  1 - Saisir un nombre dans un formulaire

//  2 - Tant que la valeur est (inférieure ou égale à 3) ou (supérieure ou égale à 120) ou une (string), la boîte de dialogue s'affiche, qui vous demande "Indiquez votre âge".

//  3 - Déclarer une variable "majoriteFr" qui comprend la valeur 18

//  4 - Déclarer une fonction "afficheAge" qui prend en paramètre un nombre , la fonction n'a pas de valeur de retour

// var age = prompt("Indiquez votre âge : ");

// while (age <= 3 || age >= 120 || isNaN(age)) {
//   age = prompt("Indiquez votre âge : ");
// }

// var majoriteFR = 18;

// afficheAge(age, majoriteFR);

// function afficheAge(agePersonne, ageAdulte) {
//   if (agePersonne < ageAdulte) {
//     alert("Vous n'êtes pas encore majeur ! ");
//   }

//   if (agePersonne >= ageAdulte) {
//     alert("Bienvenue, vous êtes majeur. :)");
//   }
// }

// var age = prompt("Indiquez votre âge : "); 

// while (age <= 3 || age >= 120 || isNaN(age)) {
//   age = prompt("Indiquez votre âge : ");
// }

// var majoriteFR = 18;

// afficheAge(age, majoriteFR);

// exerci 13.06.2023
// Jour Suivant
// Ecrivez un programme jour_suivant.js qui fait saisir un nom de jour de la semaine à l'utilisateur, puis affiche le nom du jour suivant.

// Les erreurs de saisie (jour incorrect) doivent être gérées.

// Effectuez l'exercice avec des if/if else puis avec un switch.
// var nomJourSemaine = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];
// var jourSuivant;
// jourSuivant = prompt("saisir jour de la semaine");
// if (jourSuivant === nomJourSemaine[0]) {
//   document.write(nomJourSemaine[1]);
// } else if (jourSuivant === nomJourSemaine[1]) {
//   document.write(nomJourSemaine[2]);
// } else if (jourSuivant === nomJourSemaine[2]) {
//   document.write(nomJourSemaine[3]);
// } else if (jourSuivant === nomJourSemaine[3]) {
//   document.write(nomJourSemaine[4]);
// } else if (jourSuivant === nomJourSemaine[4]) {
//   document.write(nomJourSemaine[5]);
// } else if (jourSuivant === nomJourSemaine[5]) {
//   document.write(nomJourSemaine[5]);

// }
// var day = prompt("ecrire un jour de la semain", "lundi");
// (maj et minuscule)
// day = day.toLowerCase();
// while (Number(day)) {
//     day = prompt("ecrire un jour de la semain", "lundi");
// }
// switch (day) {
//   case "lundi":
//     document.write("demain nous seron mardi");
//     break;
//   case "mardi":
//     document.write("demain nous seron mercredi");
//     break;
//   case "mercredi":
//     document.write("demain nous seron jeudi");
//     break;
//   case "jeudi":
//     document.write("demain nous seron vendredi");
//     break;
//   case "vendredi":
//     document.write("demain nous seron samedi");
//     break;
//   case "samedi":
//     document.write("demain nous seron dimanche");
//     break;
//   case "dimanche":
//     document.write("demain nous seron lundi");
//     break;
//   default:
//     document.write("nous prenons que les jours de la semaine");
//     day = prompt("ecrire un jour de la semain", "lundi");
// }

// var dayif = prompt("ecrire un jour de la semain", "lundi");
// while (Number(dayif)) {
//   dayif = prompt("ecrire un jour de la semain", "lundi");
// }
// if (dayif == "lundi") {
//   document.write("demain nous seron mardi");
// } else if (dayif == "mardi") {
//   document.write("demain nous seron mercredi");
// } else if (dayif == "mardi") {
//   document.write("demain nous seron jeudi");
// } else if (dayif == "mardi") {
//   document.write("demain nous seron vendredi");
// } else if (dayif == "mardi") {
//   document.write("demain nous seron samedi");
// } else if (dayif == "mardi") {
//   document.write("demain nous seron dimanche");
// } else if (dayif == "mardi") {
//   document.write("demain nous seron lundi");
// } else {
//   document.write("nous prenons que les jours de la semaine");
// }

// autre resolution meme exercice 13.06

// var day = prompt("ecrire un jour de la semain", "lundi");
// (maj et minuscule)
// day = day.toLowerCase();
// while (Number(day)) {
//     day = prompt("ecrire un jour de la semain", "lundi");
// }
// if (
//   day == "lundi" ||
//   day == "mardi" ||
//   day == "mercredi" ||
//   day == "jeudi" ||
//   day == "vendredi" ||
//   day == "samedi" ||
//   day == "dimanche"
// ) {
//   switch (day) {
//     case "lundi":
//       document.write("demain nous seron mardi");
//       break;
//     case "mardi":
//       document.write("demain nous seron mercredi");
//       break;
//     case "mercredi":
//       document.write("demain nous seron jeudi");
//       break;
//     case "jeudi":
//       document.write("demain nous seron vendredi");
//       break;
//     case "vendredi":
//       document.write("demain nous seron samedi");
//       break;
//     case "samedi":
//       document.write("demain nous seron dimanche");
//       break;
//     case "dimanche":
//       document.write("demain nous seron lundi");
//       break;
//     default:
//       document.write("nous prenons que les jours de la semaine");
//       day = prompt("ecrire un jour de la semain", "lundi");
//   }
// }

// var dayif = prompt("ecrire un jour de la semain", "lundi");
// while (Number(dayif)) {
//   dayif = prompt("ecrire un jour de la semain", "lundi");
// }
// if (dayif == "lundi") {
//   document.write("demain nous seron mardi");
// } else if (dayif == "mardi") {
//   document.write("demain nous seron mercredi");
// } else if (dayif == "mardi") {
//   document.write("demain nous seron jeudi");
// } else if (dayif == "mardi") {
//   document.write("demain nous seron vendredi");
// } else if (dayif == "mardi") {
//   document.write("demain nous seron samedi");
// } else if (dayif == "mardi") {
//   document.write("demain nous seron dimanche");
// } else if (dayif == "mardi") {
//   document.write("demain nous seron lundi");
// } else {
//   document.write("nous prenons que les jours de la semaine");
// }

// Comparaison de deux nombres
// Ecrivez un programme 07_comparaison.js qui fait saisir deux nombres puis compare leurs valeurs et affiche un message approprié
//  (plus grand, plus petit, égal).

// var nom1 = prompt("saisir val");
// var nom2 = prompt("saisir val");
// if (nom1 < nom2) {
//   document.write("la plus petite");
// } else if ((nom1 = nom2)) {
//   document.write("égal");
// } else if ((nom1 > nom2)) {
//   document.write("grand");
// }

// function comparaison(va1, va2) {
//   if (va1 > va2) {
//     document.write("plus grand");
//   } else if (va1 < va2) {
//     document.write("petit");
//   } else if (va1 == va2) {
//     document.write("égal");
//   } else if (va1 == va2) {
//     document.write("égal");
//   }
// }
// comparaison(nom1, nom2);

// exercice avec la fonction random

// var prenom = [
//   "Alexis",
//   "Alin",
//   "Cynthia",
//   "Faïssal",
//   "Jérémy",
//   "Karima",
//   "Michel",
//   "Narcis",
//   "Nawal",
//   "Oliver",
//   "Rahim",
//   "Wassila",
// ];
// on declare une variable chiffreRand

// var chiffreRand = Math.random();
// chiffreRand = chiffreRand * 10;
// chiffreRand = Math.floor(chiffreRand);
// var result = prenom[chiffreRand];
// document.write(chiffreRand+" " +result);

// on aura les renom aleatoir et les valeur aléatoir

// 14.06.2023

// function fillarray(num) {
//   var addElement = [];
//   var elem;
//   for (var i = 0; i <= num; i++) {
//     elem = prompt("saisir des données");
//     addElement.push(elem);
//   }
//   return addElement;
// }
// var fruits = fillarray(3);
// document.write(fruits);

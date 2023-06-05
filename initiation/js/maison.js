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

// EXERCICE
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

var prenom = prompt("Saisir votre prénom :");
var age = prompt("Saisir votre âge :");

console.log(prenom, age);

//2- vérification des valeurs
if (isNaN(prenom) && !isNaN(age)) {
  affichagePrenomAge(prenom, age);
}

function affichagePrenomAge(val1, val2) {
  var result = "Je m'appelle " + val1 + " et j'ai " + val2 + " ans.";
  document.write(result);
  console.log(result);
}

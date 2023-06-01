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
var fruits = ["Apple", "Banana"];
console.log(fruits);
console.log(fruitsLength);

var newLength = fruits.push("Orange");

console.log(fruitsLength);

// ["Apple", "Banana", "Orange"]

//Supprimer le dernier élément du tableau
// var lastElement = fruits.pop();

// console.log('Tableau fruits après avoir supprimé le dernier élement : ' + fruits);
// console.log('La taille finale du tableau : ' + fruits.length);
// console.log(lastElement);
// console.log('La valeur du dernier élement supprimé : ' + lastElement);

var lastElement = fruits.pop(); // supprime Orange (à la fin)
console.log(fruits);
console.log();
console.log(newLength);

// ["Apple", "Banana"];

//Supprimer le premier élément du tableau

var first = fruits.shift(); // supprime Apple (au début)

// ["Banana"];

//Ajouter au début du tableau

var newLength = fruits.unshift("Strawberry"); // ajoute au début

// ["Strawberry", "Banana"];

fruits.push("Mango");

// ["Strawberry", "Banana", "Mango"]

// Créer un tableau
//Trouver l'index d'un élément dans le tableau

var pos = fruits.indexOf("Banana");

// 1

//Supprimer un élément par son index

var removedItem = fruits.splice(pos, 1); // supprime 1 élément à la position pos

// ["Strawberry", "Mango"]

//Supprimer des éléments à partir d'un index

var vegetables = ["Cabbage", "Turnip", "Radish", "Carrot"];

console.log(vegetables);

// ["Cabbage", "Turnip", "Radish", "Carrot"]

var pos = 1,
  n = 2;

var removedItems = vegetables.splice(pos, n);

// n définit le nombre d'éléments à supprimer,

// à partir de la position pos

console.log(vegetables);

// ["Cabbage", "Carrot"] (le tableau d'origine est changé)

console.log(removedItems);

// ["Turnip", "Radish"] (splice retourne la liste des éléments supprimés)

//Copier un tableau

var shallowCopy = fruits.slice(); // crée un nouveau tableau qui contient les éléments de fruits

// ["Strawberry", "Mango"]

// Dispose d’un menu contextuel
// Composer

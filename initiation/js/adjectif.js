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

// var prenom =[];
// var adjectif=[];
// var saisie;
// while(prenom.length<=12){
//     saisie = prompt("saisir un prenom");
//     prenom.push(saisie);

// }
// document.write(prenom);
// var prenom = [];
// var adjectif = [];
// on doit declarer une autre varialbe pour reccuperer les valeur de prompt;
// var prenomForm;
// while (prenom.length <= 12) {
//   prenomForm = prompt("saisir prenom");
//   prenom.push(prenomForm);

// }
// console.log(prenom);
// document.write(prenom );

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

 


















function fillArray(num){
    var adelement=[];
    var element;
    for(i=0;i<=num;i++){
        element=prompt("saisir les données");
        adelement.push(element);
    }
    return adelement;
}
// execution de la fonction : 
var fruits = fillArray(3);
document.write("<p>" +fruits+ "</p>");
console.log(fruits);


// 1- Déclarer une fonction "fillArray" qui prend en paramètre un entier "num" et elle retourne un tableau "addElement"
// 2- dans la fonction :

// function fillArray(num) {
    // a/Déclarer une variable de type tableau "addElement"
    // var addElement = [];
    // b/ Déclarer une variable "elem"
    // var elem;
    // c/Dans une boucle "for", utiliser une boîte dialogue afin de saisir des données, nous allons stocker la valeur de retour dans la variable "elem" (nombre de l'affichage de la boîte de dialogue dépend du nombre qui vient du paramètre utilisé dans la fonction)
    //   d/ Les données saisies à partir de la boîte de dialogue seront stockées dans le tableau "addElement"
    // for (var i = 0; i < num; i++) {
    //   elem = prompt("Saisir de données !");
    //   addElement.push(elem);
//     }
  
//     return addElement;
//   }
  
  
  



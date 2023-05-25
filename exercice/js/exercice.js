// var prenom = "alin";
// prenom est le nom de la variale , entre guillemet cest la valeur (ALIN) de la variabla, Type de la variable cest Stringla chaine de caracteur cad type de variable;
// quand cest pas entre guillemet
// var nomMumero = 06616223;
// type numérique pck ilya pas des guillemet
// var monMum = "0616223915";
// entre guillemet cest une chaine de caractaire
// var booleanFals = false;
// boollean
// var booleanTrue = true;
// boolean
// var varNull = null; // variable null
// console.log(prenom);
// syntaxe pour savoir le contenue de variable. avc ce syntaxe je vais savoir la valeur du variable, f12 et on clic sur console
// alert("voici mon prenom alin");
// prompt("Question: on est quel jour ?", "jour de la semaine");
// avec le formulaire  Demander à l'utilisateur une valeur (2 façons)ici  on va aussi afficher une case formulaire ou on peut inserer des info

//on met dedant le nom de la valeur et apres on ouvre html dans le navigateur,on va voir le texte voici  monprenom alin dans la boite de dialogue
// window.alert("voici mon prenom alin");
// ceci est aussi meme k alert(......)
// document.write("A la pause vous aurez des Haribos Pik !");
// on aura le text dans la page

// j'ai declaré une variable mon prenom avec valeur prompt et pour voir la valeur ou resultat de ma variable on met le 2ieme syntaxte pour afficher la valeur dans la page
// var monPrenom = prompt();
// document.write(monPrenom);

//
// var unboolean = false;

// console.log(unboolean);
// ici dans le console cest true qui sera afficher car on a changé le boolean fals en true
// unboolean = "true";
// console.log(unboolean);
// console.log(typeof unboolean);

//les constant
// const PAYS = "France";

// document.write(PAYS);
//    STRING NUMBER
// var unChiffre = "12";
// console.log(unChiffre);
// console.log(typeof unChiffre);

// CHANGER STRING EN NOMBRE AVEC SYNTAXE STRING EN NOMBRE
// unChiffre = parseInt(unChiffre);
// console.log(unChiffre);
// console.log(typeof unChiffre);

// pour decimal

// je ré-affecte une valeur
// unChiffre = "12.22";
// console.log(unChiffre);
// console.log(typeof unChiffre);
// unChiffre = parseInt(unChiffre);

// STRING => FLOAT ol converti en decimal
// unChiffre = parseFloat(unChiffre);
// console.log(unChiffre);
// console.log(typeof unChiffre);

// TYPE DE FOCTION

/* 1.a au moins un paramettre sans valeur de retour, 
2.paramettre avec une valeur de retour
mettre qlq part cad variable
 3.sans paramettre,avec valeur de retour 
 4.sans paramettre sans valeur de retour,*/

//  EXERCICE 24.5.2022

// var monPrenom;
// monPrenom = prompt();
// // page web 4
// document.write(monPrenom);
// console.log(monPrenom);
// alert(monPrenom);

// EXERCICE 25.05.23

// prompt();
// var nb4;
// nb4 = prompt();
// var nb5 = 7;
// var calcul = nb4 % nb5;
// document.write(calcul);
// console.log(calcul);
// alert(calcul);

var nb1 = prompt();
var nb2 = 7;
console.log(typeof nb1);
nb1 = parseInt(nb1);
console.log(typeof nb1);
var resultat = nb1 % nb2;
console.log("res:" + resultat);
document.write(resultat + "<br>");
alert(resultat);
/* aditionner le resultat avec nb2 et stocker le dans resultat, 
on avait affecté à nb1 la valeur 22, on a eu modulo 1 comme reste

*/

// resultat=resultat+6

// resultat = resultat + nb2;
resultat += nb2;
document.write(resultat);

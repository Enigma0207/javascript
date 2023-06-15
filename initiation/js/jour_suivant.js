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
    // avec les switch


// autre resolution meme exercice 13.06

// var nomJourSemaine = prompt("ecrire un jour de la semain", "lundi");
// (maj et minuscule)
// nomJourSemaine = nomJourSemaine.toLowerCase();

// if(
//   nomJourSemaine == "lundi" ||
//   nomJourSemaine == "mardi" ||
//   nomJourSemaine == "mercredi" ||
//   nomJourSemaine == "jeudi" ||
//   nomJourSemaine == "vendredi" ||
//   nomJourSemaine == "samedi" ||
//   nomJourSemaine == "dimanche"
// ) 
//   switch (nomJourSemaine) {
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
// Jour Suivant
// Ecrivez un programme jour_suivant.js qui fait saisir un nom de jour de la semaine à l'utilisateur, puis affiche le nom du jour suivant.

// Les erreurs de saisie (jour incorrect) doivent être gérées.

// Effectuez l'exercice avec des if/if else puis avec un switch.



var jourSemain=["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"];
var jourSuivant = prompt("saisir jour suivant")
if(jourSuivant === jourSemain[0]){
    document.write(jourSemain[1]);
}
if(jourSuivant === jourSemain[1]){
    document.write(jourSemain[2]);
}
if(jourSuivant === jourSemain[2]){
    document.write(jourSemain[3]);
}
if(jourSuivant == jourSemain[3]){
    document.write(jourSemain[4]);
}
if(jourSuivant == jourSemain[4]){
    document.write(jourSemain[5]);
}
if(jourSuivant == jourSemain[5]){
    document.write(jourSemain[6]);
}


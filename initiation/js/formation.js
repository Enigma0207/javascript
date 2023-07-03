/*27 06 2023

Écrire un programme informatique en Javascript qui calcule le volume d’un parallélépipède rectangle.On rappelle que la formule 
pour calculer le volume est: Volume = largeur x longueur x hauteur.pour y arriver: 1.il faut déclarer 3 variables(largeur, longueur et hauteur) 
et les initialiser avec des valeurs numériques 2.déclarer une variable volume 
et l’initialiser à 03.Appliquer la formule puis affecter son résultat à la variable volume4.afficher le résultat sur la console*/

// let volume = 0;
// let largeur = "2";
// let longuer = "3";
// let hauteur = "1";
// volume = largeur * longuer * hauteur;
// console.log(volume);
// document.write(volume);


                                            
// let age =prompt("saisir votre àge");
// if (age < 5) {
//     console.log("bb");
// }
// else if ((age >= 5) && (age <= 10)) {
//     console.log("enfant");
// }
// else if ((age >= 11) && (age <= 18)) {
//     console.log("ado");
// }
// else if (age > 18) {
//     console.log("vieux")
// }
// else {
//     console.log("inconnuto");
// }

// avec la condution switch


// [16:21] iboudiokel (Invité)
    
// en utilsant la structure conditionnelle switch
// ecrire un programme qui afficher le jour de la semaine en fontion d'un nombre donné
// si nombre = 0 afficher dimanche.....


// en ulisant la ternaire ecrire un programe qui affiche adulte si l'age est superieur ou egal a  18 et mineur si age est inferieur a 18

//  jour = 5;
// switch (jour) {
//     case 0:
//         console.log("dimanche");
//         break;
//     case 1:
//         console.log("lundi");
//         break;
//     case 2:
//         console.log("mardi");
//         break
//     case 3:
//         console.log("mercredi");
//         break
//     case 4:
//         console.log("jeudi");
        
//         break;
//     case 5:
//         console.log("vendredi");
//         break;
//     case 6:
//         console.log("samedi")
//         break
    
//     default:
//         document.write("quel jour de la semaine")

//         break;
// }


// var age = 50;
// var message = (age >= 18) ? "majeur" : "mineur";


// console.log(message);

// BOUCLE

// 1FOR
// QUAND ON CONNAIT LE NOMBRE D TOUR

// 2.WHILE
// QUAND ON CONNAIT PAS LE NOMBRE DE TOUR DE LA BOUCLE
// VAR EST DECLARER à L4EXTERIEUR

// 3DO WHILE

// var i = 0;
// do {
    
//     confirmnsole.log;
//     i++

// } while (i<5);
    
// let i = 6;
// do {
//     console.log(i);
//     i++;
// } while (i < 5);
// affiche6
//

// BREAK ET CONTINU

// [10:23] iboudiokel (Invité)
    
// (4 == 4) && (5 != "5")              // =>
// (10 > 5) || (3 <= 2)                // =>
// !(true && false)                    // =>
// (4 >= 4) && !(false || true)        // =>
// (7 >= 8) || !(false && true)        // =>
// (5 > 3) && (10 == 10)               // =>
// !(true || false) && (6 >= 6)        // =>
// (8 <= 4) || !(false && true)        // =>
// !((10 > 8) || (5 < 2))              // =>



// let i = 6;


// do {
//     console.log(i); // affiche 6
//     i++;  // incremente i 6 + 1 = 7
// }​​​​​​​ while (i < 5); // verifie la condition


// console.log(i); // affiche 7


//
// exemple du break => arreter l'execution de la boucle si la variable i egale 4


// for (let i = 0; i < 10; i++){
//     if (i == 4) {
//         break;
//     }
//     console.log(i);
// }


//  exemple du continue => on souhaite afficher que les nombres pairs entre 0 et 10

// for (let i = 0; i < 10; i++){
//     if (i % 2 == 0) {
//         continue;
//     }
//     console.log(i);
// }
// idem
// for (let i = 0; i <= 10; i++){
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }


// //  exemple du continue => on souhaite afficher que les nombres impairs entre 0 et 10
// for (let i = 0; i <= 10; i++){
//     if (i % 2 == 0) {​​​​​​​ // verifie si i n'est pas un nombre impair
//         continue; // ignore et passe a l'iteration suivante
//     }
//     console.log(i);
// }



// TABLEAU
// est un objet en js
// let tableau = [];
// let table = new Array();




// let tableau=["cythia", "narcis", "rahim"];
// let index = tableau.indexOf("cythia");
// console.log(index);

// [13:39] iboudiokel (Invité)
    
// let i = 6;


// do {
//     console.log(i); // affiche 6
//     i++;  // incremente i 6 + 1 = 7
// }​​​​​​​ while (i < 5); // verifie la condition


// console.log(i); // affiche 7



// // exemple du break => arreter l'execution de la boucle si la variable i egale 4
// for (let i = 0; i < 10; i++){
//     console.log(i); // affiche i
//     if (i == 4) {​​​​​​​ // si i = 4
//         break; // sortir de la boucle
//     }
// }


// //  exemple du continue => on souhaite afficher que les nombres pairs entre 0 et 10
// for (let i = 0; i <= 10; i++){
//     if (i % 2 != 0) {​​​​​​​ // verifie si i n'est pas un nombre pair
//         continue; // ignore et passe a l'iteration suivante
//     }
//     console.log(i);
// }


// // idem
// for (let i = 0; i <= 10; i++){
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }


// //  exemple du continue => on souhaite afficher que les nombres impairs entre 0 et 10
// for (let i = 0; i <= 10; i++){
//     if (i % 2 == 0) {​​​​​​​ // verifie si i n'est pas un nombre impair
//         continue; // ignore et passe a l'iteration suivante
//     }
//     console.log(i);
// }



// let tab = ["Alin", 45]; // ["Alin", 45]
// tab[3] = "2 rue de l'amour"; // ["Alin", 45, "", "2 rue de l'amour"]
// // vue que le tableau n'a pas d'indice 2 et 3 met l'indice 2 a vide et l'indice 3 avec la valeur
// console.log(tab);
// tab.push("0678545855"); // ["Alin", 45, "", "2 rue de l'amour", "0678545855"]
// console.log(tab);
// tab.unshift("Johanne"); // ["Johanne", "Alin", 45, "", "2 rue de l'amour", "0678545855"]
// console.log(tab);
// tab[3] = "future"; // ["Johanne", "Alin", 45, "future", "2 rue de l'amour", "0678545855"]
// console.log(tab);
// delete tab[3]; // ["Johanne", "Alin", 45, "", "2 rue de l'amour", "0678545855"]
// console.log(tab);
// tab = new Array(); // reinitialise le tableau
// tab = [];  // reinitialise le tableau


// let tableau = ["Cynthia", "Narcis", "Rahim", "Nawal", "Karima"];
// let index = tableau.indexOf("Narcis");
// console.log(index); // 1
// let newTab = tableau.slice(0, 3); // ["Cynthia", "Narcis", "Rahim"]
// console.log(newTab);


// let tabNumer = [1, 8, 19, 5];
// console.log(tabNumer.sort()); // [1, 19, 5, 8]


// tabNumer.sort(function (a, b) {
//     return a - b;
// }​​​​​​​);


// let tab2 = [2, 7, 9, 8];
// tab2.fill("Alexis"); // ["Alexis", "Alexis", "Alexis", "Alexis"] remplace alexi dans tous les element
// console.log(tab2);
// tab2.fill("Michel", 1, 3); // ["Alexis", "Michel", "Michel", "Alexis"]
// console.log(tab2);


// let tab3 = ["Alexis", "Jérémy", "Michel", "Faissal"];
// let str = tab3.join(' '); // "Alexis Jérémy Michel Faissal"
// console.log(str);
// console.log(tab3.reverse()); // ["Faissal", "Michel", "Jérémy", "Alexis"];


// let tab4 = [2, 5, 8];
// // tab4.splice(1, 2); // [2]
// tab4.splice(2, 0, 'a', 'b'); // [2, 5, 'a', 'b', 8]
// console.log(tab4);


// let tab5 = [1, 2, 3];
// let tab6 = [4, 5, 6];
// let tab7 = tab5.concat(tab6); // [1, 2, 3, 4, 5, 6]
// console.log(tab7);


// let tab8 = [1, 6, 8, 3];
// let tab9 = tab8.map(e => e * 5); // [5, 30, 40, 15]
// console.log(tab9);




// EXERCICE TABLEAU

// soit le tabelau: ["banane", "pomme", "mangue"];
// ajouter une fraise entre pomme et mangue
// suprimer la banane
// remplacer fraise et mangue par goyave
// let fruit = ["banane", "pomme", "mangue"];
// fruit.splice(2,0,"fraise") //['banane', 'pomme', 'fraise', 'mangue'] il entre dans la position 2 et 0 pour ne pas supprimer mangue et alors ajouter fraise avant mangue
// console.log(fruit);
// fruit.shift();  // pour supprimer la première element
// console.log(fruit);
// fruit.fill("goyave"); //pour remplacer tous les lement par goyave
// console.log(fruit);


// FUNCTION
// function addition(a, b) {
//   let resultat = a + b;
//   return resultat;
// }

// let somme = addition(2, 5);
// console.log(somme);

// function addition(a, b) {
// //   let resultat = a + b;
//   return a+b;
// }

// let somme = addition(3, 5);
// console.log(somme);
// document.write(somme);


// fonction avec valeur par defaut
// prenom est une variable qui prend par degaut la valeur anonyme
// function direBonjourPrenom(prenom = "anonyne") {
//     console.log("bonjour", prenom, "!");
//     document.write("bonjour", prenom, "!");

// }

// direBonjourPrenom(); //bonjour anonyime
// direBonjourPrenom("michel"); //bonjour michel



// 28.06.2023
// EXERCICE
// ecrire une fonction maxMin qui prend trois paramètres

// les deux premiers sont des nombres(a et b)
// le troisième un boolean(c)
// par défaut le troisieme parametre(c = true)
//  ●si le paramètre c = true la fonction retourne le maximum entre a et b
//  ●si le paramètre c = false la fonction retourne le minimum entre a et b

// exemple: maxMin(2, 5, true) => 5
// maxMin(2, 5, false) => 2

// function maxMin(a,b,c){
//     if (((c==true)&&(a>b))||((c==false)&&(a<b)))  {
        
//         return a;
//     }
//     else (((c==true)&&(a<b))||((c==false)&&(a>b))){
        
//         return b;
//     }
//  }

// let resultat=maxMin(3, 5, true);
// document.write(resultat);
// function maxiMin(a, b, c) {
//     if ((c==true) &&(a<b)) {
//         return b;
//     }
//      else if ((c==false)&&(a<b)){
//         return a;
//     }
//          else if ((c == true) && (a > b)) {
//         return a;
//     }
//     else if ((c == false) && (a > b)) {
//         return b;
//     }
   
// }
// let resultat = maxiMin(1, 3, true)
// console.log(resultat);


// 29.06.23 exercice

// analysez et interpreter les codes suivants

// let somme = 0; // la variable somme vaut 0 au depart

// for (let i = 1; i <= 5; i++){
//     // console.log(i);
//     somme = somme + i;
//     // somme += i;
// }

// console.log(somme);


// iteration 1:
    // somme = 0
    // i = 1
    // fin iteration 1:
        // somme = 1
        // i = 2
// iteration 2:
    // somme = 1
    // i = 2
    // fin iteration 2
        // somme = 3
        // i = 3
// iteration 3:
    // somme = 3
    // i = 3
    // fin iteration 3
        // somme = 6
        // i = 4
// iteration 4:
    // somme = 6
    // i = 4
    // fin iteration 4
        // somme = 10
        // i = 5
// iteration 5:
    // somme = 10
    // i = 5
    // fin iteration 5
        // somme = 15
        // i = 6

// 29.06.2023 ecercice

// ecrire unr fonction sommeTab qui prend en paramettre un tableau composé de nombres
// la fonction doit retourner la somme des éléments du tableau
// exemple:

// sommeTab([1,6,9])
   

// function someTab(table) { //1 creation de la fonction
//     let somme = 0; //3 declarer une valeur qui sock la valeur de retour et initialisé a 0
//     let i = 0;// 5initalialiser la valeur de i
//     while (i < table.length) { //4 tant que i est plus que la taille  du tableu
//         somme = somme + table[i]; //6 ajouter la valeur de la position i du tableau à la variable somme
//         i++;//incrementer i
//     }
//     return somme //2 la fonction a une valeur de retour
// }

// // pour executer la fonction

// let tableautte=[1,3,5] // dans l'enoncer
// let resultat = someTab(tableautte);
// document.write(resultat);



// function maxTab(tableau) {
//     let max = tableau[0]; // on considere le premier element est le plus grand; premiere valeur du tableau
//     for (i = 0; i <= tableau.length; i++){
//         if (max < tableau[i]) {
//             max = tableau[i];
//         }
//     }

//     return max;
// }
// // on fait appel à notre tableau
// let table = [5, 8, 10, 9, 0, 1];
// let resultat = maxTab(table);
// console.log(resultat);

// solution du formateur
// / 29.06.2023
// ecrire une fonction maxTab qui prend en paramètre un tableau composé de

// nombres

// la fonction devra retourner le plusgrand nombre du tableau


// function maxTab(tableau) {
//     let max = tableau[0]; // on considere le premier elemement comme etant le plus grand
//     for (let i = 0; i < tableau.length; i++){ // pour i allant de 0 a la taille du tableau
//         // comparer max de la valeur a la position i du tableau
//         if (max < tableau[i]) {  // si max est plus petit
//             // on remplace la valeur de max par la valeur de la position i du tableau
//             max = tableau[i];
//         }
//     }
//     return max; // retourner max
// }
// let tab1 = [5, 8, 3, 0];
// let resultat3 = maxTab(tab1);
// console.log(resultat3); // affiche => 8

 

// ecrire une fonction minTab qui prend en paramètre un tableau composé de

// nombres

// la fonction devra retourner le plus petit nombre du tableau

// exemple:

// minTab([2, 7, 4, 0]) => 0

// function minTab(tableau) {
//     let min = tableau[0];
//     for (let i = 0; i < tableau.length; i++){
//         if (min > tableau[i]) {
//             min=tableau[i]
//         }
//     }

//     return min;
// }
// let tab1 = [5, 8, 3, 0];
// let resultat3 = minTab(tab1);
// console.log(resultat3); // affiche =>


// 29.06.2023
// ecrire une fonction maxMinTab qui prend en paramètre un tableau composé de nombres et un boolean
// ●si le deuxieme parametre égale true la fonction devra retourner le plus grand nombre du tableau
// ●sinon elle retournera le plus petit

// [14:16] iboudiokel (Invité)
    
// function maxTab(tableau) {
//     let max = tableau[0]; // on considere le premier elemement comme etant le plus grand
//     for (let i = 0; i < tableau.length; i++){​​​​​​​ // pour i allant de 0 a la taille du tableau
//         // comparer max de la valeur a la position i du tableau
//         if (max < tableau[i]) {​​​​​​​  // si max est plus petit
//             // on remplace la valeur de max par la valeur de la position i du tableau
//             max = tableau[i];
//         }
//     }
//     return max; // retourner max
// }


// function minTab(tableau) {
//     let min = tableau[0]; // on considere le premier elemement comme etant le plus grand
//     for (let i = 0; i < tableau.length; i++){​​​​​​​ // pour i allant de 0 a la taille du tableau
//         // comparer max de la valeur a la position i du tableau
//         if (min > tableau[i]) {​​​​​​​  // si max est plus petit
//             // on remplace la valeur de max par la valeur de la position i du tableau
//             min = tableau[i];
//         }
//     }
//     return min; // retourner max
// }



// function maxMinTab(tableau, c) {
//     if (c == true) {
//         return maxTab(tableau);
//     }​​​​​​​ else {
//         return minTab(tableau);
//     }
// }




// [14: 55] iboudiokel(Invité)
    
// const array = [1, 12, 3, 67, 1, 23, 0, 87];
// const array2 = [1, 1, 2, 3, 4, 5];
// const array3 = [0];
// const array4 = ['never gonna', 'give you', 'up'];
// const array5 = ['never gonna', 'let you', 'down'];

// exercice 
// Ecrivez une fonction "verifSortAsc" qui prend en paramètre un tableau
//  et vérifie qu'il est bien trié dans l'ordre ascendant.
//  La fonction devra retourner "true" si c'est le cas, "false" sinon.
//  Exemples :verifSortAsc(array) => doit retourner "false"
//  verifSortAsc(array2) => doit retourner "true"

function verifSortAsc(tableau) {
 let bienTrier=true;
 let tableau2;
 for (i=0;i<tableau.length;i++){
    tableau2.push(tableau[i]);
    tableau2.sort();

 }
 for(i=0;i<tableau2.length;i++){
    if(tableau2([i])== tableau([i])){
        bienTrier=true;
    }
    else{
        bienTrier==false;
    }
 }

    return bienTrier;
    
}
const array = [1, 12, 3, 67, 1, 23, 0, 87];

let tabverif=verifSortAsc(array); 









// function verifSortAsc(tableau) {
//     let estTrier = true; // par defaut on considere que le tableau est trie
//     let tab = []; // declare un tableau vide pour avoir une copy du tableau
//     for (let i = 0; i < tableau.length; i++){​​​​​​​ //
//         // remplir le tableau tab par les valeur du tableau tableau
//         tab.push(tableau[i]);
//     }     
//     tab.sort(); // trier tab


//     for (let i = 0; i < tab.length; i++){​​​​​​​ // pour i allant de 0 a taille du tableau
//         if (tab[i] == tableau[i]) {​​​​​​​ // si tab[i] == tableau[i]
//             estTrier = true;
//         }​​​​​​​ else {​​​​​​​ // sinon
//             estTrier = false;
//             break; // on sort de la boucle
//         }
//     }
//     return estTrier;
// } 


// console.log(verifSortAsc(array5)); // =>


// 29.06.2023
// Ecrivez une fonction "reverseArray" qui prend en paramètre un tableau et qui retourne ledit tableau inversé.
//     Exemple : reverseArray(["Hello", "World!"]) => doit retourner["World!", "Hello"]

// function reverseWord(str) {
//     let tab = str.split(''); // conversion de la chaine de caractere en tableau
//     tab.reverse(); // inverser le tableau
//     let chaine = tab.join(''); // convertir le tableau en chaine de caractere
//     return chaine;
//     // return str.split('').reverse().join('');
// }


// console.log(reverseWord("Hello World!"));   

// function reversWord(chainCaracter) {
//     let tab = chainCaracter.split('');
//     tab.reverse();
//     let chaine=tab.join('');
//     return chaine;
// }
// let resultat = reversWord("Hello World!");
// document.write(resultat);
// ou
// [15:33] iboudiokel (Invité)
    
// function reverseWord(str) {
//     let tab = str.split(''); // conversion de la chaine de caractere en tableau
//     tab.reverse(); // inverser le tableau
//     let chaine = tab.join(''); // convertir le tableau en chaine de caractere
//     return chaine;
//     // return str.split('').reverse().join('');
// }


// console.log(reverseWord("Hello World!"));


// exerciceEcrivez une fonction "reverseArray" qui prend en paramètre un tableau et qui retourne ledit tableau inversé.
// Exemple : reverseArray(["Hello", "World!"]) => doit retourner["World!", "Hello"]




// Ecrivez une fonction "reverseWords" qui prend en paramètre un nombre indéfini de paramètres étant des chaînes de caractères et qui retourne,
//     cette fois - ci, un tableau contenant chaque mot inversé.Exemple : reverseWords("Hello", "World!") => doit retourner["olleH", "!dlroW"]






// exercice
// À l'aide des trois fonctions écrites précédemment, écrivez une fonction qui prend en paramètre le tableau
// suivant et retourne ledit tableau inversé, de même que tous les mots qu'il contient.
// constwords = ['s.e.têrp', 'sap', "setê'n", 'suoV', 'ces', 'redoc', 'av', 'aç', 'eénna', 'etteC']





// exerciceÀ l'aide des trois fonctions écrites précédemment, écrivez une fonction qui prend en paramètre le tableau suivant et retourne ledit tableau inversé,
//  de même que tous les mots qu'il contient.constwords= ['s.e.têrp', 'sap',"setê'n",   'suoV','ces',      'redoc','av',       'aç','eénna',    'etteC']



// function reverseWord(str) {
//     let tab = str.split(''); // conversion de la chaine de caractere en tableau
//     tab.reverse(); // inverser le tableau
//     let chaine = tab.join(''); // convertir le tableau en chaine de caractere
//     return chaine;
//     // return str.split('').reverse().join('');
// }

// // console.log(reverseWord("Hello World!"));

// function reverseArray(tab) {
//     return tab.reverse(); // inverser le tableau et le retourner
// }

// function reverseWords(...words) {
//     let resultat = []; // tableau vide
//     for (let i = 0; i < words.length; i++){
//         // rempli le tableau resultat avec les valeurs inversees de chaque parametre
//         resultat.push(reverseWord(words[i]));
//     }
//     return resultat;
// }
// let res = reverseWords("bonjour", "le", "monde");
// // console.log(res);

// function phrase(tableau) {
//     let resultat = reverseArray(reverseWords(...tableau));
//     return resultat;
// }

// const words = [
//     's.e.têrp', 'sap',
//     "setê'n", 'suoV',
//     'ces', 'redoc',
//     'av', 'aç',
//     'eénna', 'etteC'
// ];
// console.log(phrase(words));



// let note = 15;
// var message = (note > 15) ? "bien" : "mauvais";
// console.log(message);
// document.write(message);
// let note = 5;
// if (note < 15) {
//     document.write("mauvais:"+note)
// } 
// else {
//     document.write("bonne:"+note)
// }
    



// FONCTION Object
// // creation de la classe personne
// class Personne{
//     // on appelle la fonction constructor (nom imposé par js) avec 2 param : n et a
//     constructor(n, a) {
//         this.nom = n; // on declare une variable nom qui prend la valeur de n
//         this.age = a; // on declare une variable age qui prend la valeur de a
//     }

//     saluer() { // la methode saluer permet d'afficher la phrase : "Bonjour, je m'appelle "nom de l'objet" et j'ai "age de l'ojet" ans.
//         console.log("Bonjour, je m'appelle "+this.nom+ " et j'ai "+ this.age+ " ans.");
//     }
// }
// // creation des objets p1 et p2
// // pour recuperer l'age ou le nom de p1 faire la syntaxe : p1.age; p1.nom;
  // let p1 = new Personne("toto", 10); // il s'appelle toto et a 10 ans
// // pour recuperer l'age ou le nom de p2 faire la syntaxe : p2.age; p2.nom;
// let p2 = new Personne("titi", 9); // il s'appelle titi et a 9 ans
// // pour appeler la methode saluer sur un des objets faire: p1.saluer();
// p1.saluer(); // "Bonjour, je m'appelle toto et j'ai 10 ans."
// p2.saluer(); // "Bonjour, je m'appelle titi et j'ai 9 ans."
// console.log(p2.nom);
// class Cercle{
//     constructor(p) {
//         this.rayon = p;
//     }



// 30.12.2013 exrcice
// [11:09] iboudiokel (Invité)
    
// EXO1:
//  Supposons que vous deviez modéliser une classe Cercle qui représente un cercle avec le propriété rayon et les méthodes calculerSurface()
// qui calcule et retourne la surface du cercle et afficherInfo() qui affiche les informations du cercle dans la console.


//   Votre tâche consiste à créer la classe Cercle, instancier un objet Cercle et appeler les méthodes calculerSurface()
//  et afficherInfo() pour l'objet instancié.

//   formule pour claculer la surface d'un cercle : PI multiplié par le rayon au caré PI * (rayon * rayon)

// class cercle{
//   constructor(r){
//     this.rayon=r;
//   }
//   calculSurface(){
//    let surface=Math.PI*(Math.sqrt(this.rayon));
//     return surface;
    
//   }
//   afficherInfo(){
//  console.log("ce cercle à un rayon de:"+this.rayon+this.calculSurface  ());
//   }
  
 
// }
// let s= new cercle(2);
// s.afficherInfo();



// / creer la classe Cercle
// class Cercle{
//     // on declare le constructeur de la classe qui prend un parametre qui est le rayon
//     constructor(r) {
//         this.rayon = r;
//     }

 

//     // declarer les methodes calculerSurface et afficherInfo
//     calculerSurface() {
//         // calculer la suface
//         let surface = Math.PI * Math.pow(this.rayon, 2);
//         return surface;
//     }

 

//     afficherInfo() {
//         // afficher les informations du cercle
//         console.log("le cercle a un rayon de " + this.rayon + " est une surface de " + this.calculerSurface());
//         // this.calculerSurface() retourne la valeur surface

//         // console.log("le cercle a un rayon de " + this.rayon + " est une surface de " + Math.ceil(this.calculerSurface()));
//     }
// }


// let c = new Cercle(2); // instancier un objet cercle = Creer un objet Cercle
// c.afficherInfo();


// exerci 2

// class Comptbancaire{
//     constructor(a, b) {
//         this.titulaire = a;
//         this.solde = b;
//     }
//     deposer(montant) {
//         let ajouter = montant += solde;
//         return ajouter;
//     }
//     retirer(montant) {
//         let retirer = montant += this.solde;
//         return montant;
//     }
//     afficherSolde() {
//         console.log("le solde de mon compte"+this.titulaire+"dans le console est "+this.solde)
//     }
// }
// let soldeFinal = new Comptbancaire("alin", 10);
// soldeFinal.afficherSolde();
    
// let soldeFinal2 = new Comptbancaire("alin", 7);
// soldeFinal2.afficherSolde();

// EXO2:30.06.2023
//   Supposons que vous deviez modéliser une classe CompteBancaire qui représente
//    un compte bancaire avec les propriétés suivantes: titulaire, solde
//    et les méthodes deposer(montant) qui permet de déposer de l'argent sur le compte,
// retirer(montant) qui permet de retirer de l'argent du compte et afficherSolde() qui affiche
// le solde actuel du compte.

 

//   Votre tâche consiste à créer la classe CompteBancaire,
//   creer le constructeur avec les parametres : titulaire et solde
//   creer les methodes:
//     deposer qui prend un parametre pour ajouter de l'argent dans le compte
//     retirer qui prend un parametre pour retirer de l'argent du compte
//     afficherSolde qui afficher le solde du compte dans la console

//   instancier un objet CompteBancaire avec comme titulaire : Abraham et solde 5
//   appeller la methode ajouter en lui passant la valeur 10
//   appeller la methode retirer en lui passant la valeur 7
//   appeller la methode afficherSolde
// class Comptbancaire{
//     constructor(a, b) {
//         this.titulaire = a;
//         this.solde = b;
//     }
//     deposer(montant) {
//         this.solde = this.solde + montant;
       
//     }
//     retirer(montant) {
//         this.solde = this.solde- montant;
//     }
//     afficherSolde() {

//         // ou
//         // console.log("le solde de mon compte" + this.titulaire + "dans le console est " + this.solde);
//         console.log(this.solde);
//     }
    
   
// }
// let compteBancaire = new Comptbancaire("alin", 5);
// compteBancaire.deposer(10);
// // compteBancaire.retirer(7);
// compteBancaire.afficherSolde();



// FONCTION ANONYME

// setTimeout(function (params) {
//     console.log("ceci est une foction de rapppel") // la fonction setTime a deux paramettre( une fonction et 2000)
// }, 2000)

// //FONCTION FLECHEE EQUIVALENTE

// const additionFleche = (a, b) => a + b;
// console.log(additionFleche);
// [13:56] iboudiokel (Invité)
    
// ici on utilise une fonction traditionnelle
// function rappel() {​​​​​​​
//     console.log("Ceci est une fonction de rappel")
// }​​​​​​​


// setTimeout(rappel(), 2000);


// // ici on utilise une fonction anonyme
// setTimeout(function() {​​​​​​​
//     console.log("Ceci est une fonction de rappel")
// }​​​​​​​, 2000)





// LES DOM


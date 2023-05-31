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

var j = true;
while (j) {
  document.write("<p> instruction:" + j + "</P>");
  j = false;
  document.write("<p> instruction:" + j + "</P>");
}
// la prmiere boucle sera true car la valeur de j cest true, et des que on change la valeur
// j en false , il va encore afficher la deuxieme valeur de j qui est false.

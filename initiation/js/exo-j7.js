var prenom = [
  "Alexis",
  "Alin",
  "Cynthia",
  "Faïssal",
  "Jérémy",
  "Karima",
  "Michel",
  "Narcis",
  "Nawal",
  "Oliver",
  "Rahim",
  "Wassila",
];
//  on declar la variable rand, on l'affecte la fonction random ou on execute la fonction random
//  pour generer des valeur aleatoir entre 0 fermé et 1 ouvert

var rand = Math.random(prenom);
var rand10 = rand * 10;
document.write(rand10);
// avec la fonction Math.floor() pour prendre juste la valeur entiere
document.write(Math.floor(rand10));

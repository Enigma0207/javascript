// A jquary
// recuperer les buttons et chak input
let nouveu_jeu = $("#nouveu_jeu");
// var nouveu_jeu = document.getElementById("nouveu_jeu");
let solution = $("#solution");
// var solution = document.getElementById("solution");
let proposer = $("#proposer");
// var proposer = document.getElementById("proposer");
//  B JS

// creer une variable pour chaque input

let proposition = $("#proposition");
// var proposition = document.getElementById("proposition");
let essaie = $("#essaie");
// var essaie = document.getElementById("essaie");
let message = $("#message");
// var message = document.getElementById("message");
let reponse = $("#reponse");
// var reponse = document.getElementById("reponse");
let essaie1 = 1;
$("#essaie").val(essaie1);



// 1.click sur solution
solution.on("click", (e) => {
    e.preventDefault();
    // on va afficher notre nombre aleatoire dans le message
    reponse.val(nombrealeatoire);

})
// il faut creer une fonction independante juste pour generer un nombre aléatioir 

function aleatoir() {
    // Math.floor(Math.random() * 51);
    //il faut recuperer la partie entiere et stocker dans une vriable
    let entier = Math.floor(Math.random() * 51);
    return entier;

}
let nombrealeatoire = aleatoir();//ici on appelle notre fonction
// function aleatoir() {
//     var entier = Math.floor(Math.random() * 51);
//     return entier;
// }
// var nombrealeatoire = nombre_aleatoire();


// 2click sur le button nouveau jeu
// nouveu_jeu.on("click", () => {
//     // e.preventDefault();

//     nouveu_jeu = nombrealeatoire;//
// })
console.log(nombrealeatoire);
proposer.on("click", (e) => {
    e.preventDefault();
    if (essaie.val() == 7) {
        message.val("Perdu ")
        
    } else {
        if (proposition.val() > nombrealeatoire) {
        message.val("supérieur");
        $("#essaie").val(+$("#essaie").val()+1)
    }
    else if (proposition.val() < nombrealeatoire) {
            message.val("inférieur");
            $("#essaie").val(+$("#essaie").val() + 1)
    }
    else if (proposition.val() == nombrealeatoire) {
        message.val("vous avez gagné");
    }
}
    
})

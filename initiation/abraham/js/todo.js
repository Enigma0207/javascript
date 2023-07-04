
// pour recuperer le bouton
let btn = document.getElementById("add_todo");
// pour recuperer le input
let todo = document.getElementById('todo');
// pour recuperer la div ou on va ajouter les todos
let todoList = document.getElementById("todolist");

// ecouter le click sur le bouton
btn.addEventListener('click', (e) => {
    e.preventDefault();
    // recuperer la valeur du input
    let val = todo.value;
    // creer un paragraphe
    let p = document.createElement("p");
    // ajouter le contenu du input dans le paragraphe
    p.textContent = val;
    // ajouter le paragraphe dans la div
    todoList.appendChild(p);
    //pour que le p soit clickable, il faut ca et pour changer la couler
    p.addEventListener("click", (e) => {
        // p.style.color = ('p.style.color!="red')? "red" :"bleu"
        p.style.color = "red";
        p.style.fontSize = "2em"
    }

    )

});


// // calculatrice
// //  recuperer les deux input(number1,number2), les boutons
// let numbre1 = document.getElementById("number1");

// let numbre2 = document.getElementById("number2");
// let button1 = document.getElementById("plus");
// let button2 = document.getElementById("moins");
// let button3 = document.getElementById("multi");
// let button4 = document.getElementById("divi");
// let egal = document.getElementById("egal");
// let resultat = document.getElementById("resultat");
// //ajouter l'operateur qui va prendre (+-*/)
// let operateur;



// // creer des click pour chak bouton(operation)
// button1.addEventListener("click", () => {
//     operateur = "+";
// })
// button2.addEventListener("click", () => {
//     operateur = "-";
// })
// button3.addEventListener("click", () => {
//     operateur = "*";
// })
// button4.addEventListener("click", () => {
//     operateur = "/";
// })
// egal.addEventListener("click", () => {
//     // ils faut convertir les valeur de deux nombre avk parseInt et les stocker
//     let val1 = parseInt(numbre1.value);
//     let val2 = parseInt(numbre2.value);

//     if (operateur == "+") {
//         resultat.value = val1 + val2;
//     }
//     else if (operateur == "-") {
//         resultat.value = numbre1.value - numbre2.value;
//     }
//     else if (operateur == "*") {
//         resultat.value = numbre1.value * numbre2.value;
//     }
//     else if (operateur == "/") {
//         resultat.value = numbre1.value / numbre2.value;
//     }
// })
//  a refere
// let number1 = document.getElementById("number1");
// let number2 = document.getElementById("number2");
// let resultat = document.getElementById("resultat");
// let button1 = document.getElementById("plus");
// let button2 = document.getElementById("moins");
// let button3 = document.getElementById("multi");
// let button4 = document.getElementById("div");
// let egal = document.getElementById("egal");
// let operateur;
// button1.addEventListener("click", () => {
//     operateur = "+";
// })
// button2.addEventListener("click", () => {
//     operateur = "-";
// })
// button3.addEventListener("click", () => {
//     operateur = "*";
// })
// button4.addEventListener("click", () => {
//     operateur = "/";
// })
// egal.addEventListener("click", () => {
//     let val1 = parseInt(number1.value);
//     let val2 = parseInt(number2.value);
//     if (operateur == "+") {
//         resultat.value = val1 + val2;
//     }

// })



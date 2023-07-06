// // recuperer id nom,email,phone et affecter des valeur
// let nom = $("#nom").val();
// let email = $("#email").val();
// let phone = $("#phone").val();

// let checkbox = $("#checkbox").val();


// let thiebou = 15;
// let salade = 12;
// let sushi = 11;
// let filets = 9;


//  clicker sur le select choisri un plat

$("#Choisir").change(function () {
    let choisir = $("#Choisir").val();
    let dessert = $("#des").val();
    let prixPlat = 0;
    let prixDessert = 0;
    switch (choisir) {
        case "thiebou dieune":
            prixPlat = 15
            break;
        case "salade de quinoa":
            prixPlat = 12
            break;
        case "sushi burger":
            prixPlat = 11
            break;
        case "filets de poulet panes":
            prixPlat = 9
            break;

        default:
            prixPlat = 0;
            break;
    }

    switch (dessert) {
        case "churros maison":
            prixDessert = 15
            break;
        case "biscuits au pepites":
            prixDessert = 12
            break;
        case "buche de noel":
            prixDessert = 11
            break;
        case "gateau au fromage":
            prixDessert = 9
            break;

        default:
            prixDessert = 0;
            break;
    }

    $("#ht").val(prixPlat + prixDessert);
    let ttc = (prixPlat + prixDessert) * 1.2;
    $("#ttc").val(ttc.toFixed(2));

});



$("#des").change(function () {

    let choisir = $("#Choisir").val();
    let dessert = $("#des").val();
    let prixPlat = 0;
    let prixDessert = 0;
    switch (choisir) {
        case "thiebou dieune":
            prixPlat = 15;
            break;
        case "salade de quinoa":
            prixPlat = 12;
            break;
        case "sushi burger":
            prixPlat = 11;
            break;
        case "filets de poulet panes":
            prixPlat = 9;
            break;

        default:
            prixPlat = 0;
            break;
    }

    switch (dessert) {
        case "churros maison":
            prixDessert = 15;
            break;
        case "biscuits au pepites":
            prixDessert = 12;
            break;
        case "buche de noel":
            prixDessert = 11;
            break;
        case "gateau au fromage":
            prixDessert = 9;
            break;

        default:
            prixDessert = 0;
            break;
    }

    $("#ht").val(prixPlat + prixDessert);
    let ttc = (prixPlat + prixDessert) * 1.2;
    $("#ttc").val(ttc.toFixed(2));

});


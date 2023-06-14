//  Comparaison de deux nombres
// Ecrivez un programme 07_comparaison.js qui fait saisir deux nombres puis compare leurs valeurs et affiche un message approprié
//  (plus grand, plus petit, égal).
var nom1 = prompt("saisir nombre");
var nom2 = prompt("saisir nombre");
if ( nom1<nom2){
    document.write("petit");
}
else if(nom1>nom2){
    document.write("superieur");
    
    }
else if(nom1==nom2){
        document.write("égalité");
        
        }
        
        // ou avec la fonction
function comparaison (var1,var2){
    if ( nom1<nom2){
        document.write("petit");
    }
    else if(nom1>nom2){
        document.write("superieur");
        
        }
    else if(nom1==nom2){
            document.write("égalité");
            
            }

}

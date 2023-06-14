function fillarray(num) {
  var addElement = [];
  var elem;
  for (var i = 0; i <= num; i++) {
    elem = prompt("saisir des données");
    addElement.push(elem);
  }
}
var fruits = fillarray(3);
document.write(fruits);

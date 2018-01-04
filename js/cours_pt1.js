var h = document.head; // variable h contient object head du document
console.log(h);

var b = document.body; // contient l'object body du DOM
console.log(b);

if (document.body.nodeType === document.ELEMENT_NODE) {
  console.log("Body est un noeud élément");
} else {
  console.log("Body est un noeud textuel");
}
//Accès au 1er enfant du body
console.log(document.body.childNodes[1]);

for (var i = 0; i < document.body.childNodes.length; i++) {
  console.log(document.body.childNodes[i]);
}

var h1 = document.body.childNodes[1];
console.log(h1.parentNode); //Affiche le noeud du body

console.log(document.parentNode); //Affiche null : document(<html>) n'a aucun noeud parent.

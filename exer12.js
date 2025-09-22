const frutas = ["Maçã", "Banana", "Laranja", "Uva"];

console.log("A primeira fruta é:", frutas[0]);
console.log("A terceira fruta é:", frutas[2]);

console.log("O array tem", frutas.length, "frutas.");

frutas.push("Morango");
console.log("O array agora é:", frutas);

frutas.pop();
console.log("O array após remover o último elemento:", frutas);

console.log("\nLista de frutas:");
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

console.log("\nLista de frutas com forEach:");
frutas.forEach(fruta => {
    console.log(fruta);
});
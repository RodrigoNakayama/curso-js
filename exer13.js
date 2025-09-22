const jogos = ["Balatro", "Undertale", "Deltarune", "Terraria"];

console.log("O segundo jogo é:", jogos[1]);

console.log("O array tem", jogos.length, "jogos.");

jogos.push("Enter the Gungeon");
console.log("O array agora ao adicionar um jogo é:", jogos);

console.log("\nLista de Jogos indies:");
for (let i = 0; i < jogos.length; i++) {
    console.log(jogos[i]);
}
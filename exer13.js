const jogos = ["Balatro", "Undertale", "Deltarune", "Terraria"];

console.log("O segundo jogo da lista é:", jogos[1]);

console.log("A lista tem ", jogos.length, "jogos.");

jogos.push("Enter the Gungeon");
console.log("A lista fica deste jeito ao adicionar um jogo:", jogos);

jogos.pop();
console.log("Ao remover o jogo adicionado previamente a lista fica deste jeito:", jogos)

console.log("\nLista de Jogos indies:");
for (let i = 0; i < jogos.length; i++) {
    console.log(jogos[i]);
};
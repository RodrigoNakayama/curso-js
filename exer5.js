const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um número bro: ", (resposta) => {
    const numero = Number(resposta);

    if (numero > 5) {
        console.log("O número é maior que 5");
    } else {
        console.log("O número é menor ou igual a 5");
    }

    rl.close();
});
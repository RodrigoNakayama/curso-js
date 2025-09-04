const idade = 25;

function podeDirigir(idade){
    if (idade >= 18) {
        console.log("Você pode tirar carteira de motorista!");
    } else {
        console.log("Você ainda não pode tirar carteira de motorista");
    }
}

podeDirigir(idade);
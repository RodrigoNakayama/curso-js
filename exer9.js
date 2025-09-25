const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let despesas = {};
let categorias = [
    "Moradia (Aluguel/Prestação)",
    "Alimentação (Supermercado/Feira",
    "Transporte (Combustível/Público",
    "Lazer (Passeios/Cinema",
    "Contas (Luz, Água, Internet, Telefone)",
    "Educação (Mensalidade/Cursos)"
];

let nomesChaves = [
    "moradia",
    "alimentação",
    "transporte",
    "lazer",
    "conta",
    "educação"
];

let index = 0;

console.log("--- Registro de Despesas pessoais ---");
console.log("Por favor, informe o valor para cada categoria. Digite 0 se não houver despesa nesta categoria");

function perguntar() {
    if (index < categorias.length) {
        rl.question(`Valor de ${categorias[index]}: R$`, (resposta) =>{
            despesas[nomesChaves[index]] = parseFloat(resposta);
            index++;
            perguntar();
        });
    } else {
        mostrarResultados();
        rl.close();
    }
}

function mostrarResultados() {
    console.log("\n--- Despesas Registradas ---");
    for (const categorias in despesas) {
        if (!isNaN(despesas[categorias]) && despesas[categoria] >= 0) {
            console.log(`${categorias.charAt(0).toUpperCase() + categorias.slice(1)}: R$ ${despesas[categorias].toFixed(2)}`);
        } else {
            console.log(`${categorias.charAt(0).toUpperCase() + categorias.slice(1)}: Valor inválido.`);
            despesas[categorias] = 0;
        }
    }
    console.log("------------------------------------");

    let totalDespesas = 0;
    let numeroDeCategoriasComDespesa = 0;

    for (const categoria in despesas) {
        if (!isNaN(despesas[categorias]) && despesas[categorias] >= 0) {
            totalDespesas += despesas[categorias];
            if (despesas[categorias] > 0) {
                numeroDeCategoriasComDespesa++;
            }
        }
    }

    console.log(`Total de Despesas: R$ ${totalDespesas.toFixed(2)}`);

    if(numeroDeCategoriasComDespesa > 0) {
        let mediaDespesas = totalDespesas / numeroDeCategoriasComDespesa;
        console.log(`Média de despesas por categoria com gasto: R$ ${mediaDespesas.toFixed(2)}`);
    } else {
        console.log("Nenhuma despesa registrada para calcular a média.");
    }

    console.log("=============================");
}

perguntar();
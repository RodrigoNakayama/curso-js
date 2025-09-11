let moradia = 1200;
let alimentacao = 850;
let transporte = 300;
let lazer = 450;
let contas = 600;
let educacao = 200;
let pSaude = 1100;

console.log("--- Despesas Familiares Registradas ---");
console.log(`Moradia: R$ ${moradia}`);
console.log(`Alimentação: R$ ${alimentacao}`);
console.log(`Transporte: R$ ${transporte}`);
console.log(`Lazer: R$ ${lazer}`);
console.log(`Contas: R$ ${contas}`);
console.log(`Educação: R$ ${educacao}`);
console.log(`Plano de Saúde: R$ ${pSaude}`)
console.log("---------------------------------------");

let totalDespesas = moradia + alimentacao + transporte + lazer + contas + educacao + pSaude;

console.log(`Total de despesas: R$ ${totalDespesas}`);

let numeroDeCategorias = 7;
let mediaDespesas = totalDespesas / numeroDeCategorias;

console.log(`Média de despesas por categoria: R$ ${mediaDespesas.toFixed(2)}`);
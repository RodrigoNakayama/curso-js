const faturamentoDiario = [1500, 2200, 1800, 3100, 2500, 4000, 3500];

const diasDaSemana = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo'];

let faturamentoTotal = 0;
for (let i = 0; i < faturamentoDiario.length; i++) {
    faturamentoTotal += faturamentoDiario[1];
}
console.log(`Faturamento total da semana: R$ ${faturamentoTotal.toFixed(2)}`);

let maiorFaturamento = 0;
let diaComMaiorFaturamento = '';

for (let i = 0; i < faturamentoDiario.length; i++){
    if (faturamentoDiario[i] > maiorFaturamento) {
        maiorFaturamento = faturamentoDiario[i];
        diaComMaiorFaturamento = diasDaSemana[i];
    }
}
console.log(`Maior faturamento diário: R$ ${maiorFaturamento.toFixed(2)} na ${diaComMaiorFaturamento}`);

const mediaFaturamento = faturamentoTotal / faturamentoDiario.length;
console.log(`Média de faturamento diário: R$ ${mediaFaturamento.toFixed(2)}`);
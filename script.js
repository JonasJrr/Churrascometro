// Carne -> em média 400 gramas por adulto, se durar + de 5 horas -> 600 gramas
// Cerveja/Álcool/Energético -> em média 1000 ml por adulto, se durar + de 5 horas -> 1600ml
// Refrigerante -> em média 1000 ml por adulto, se durar + de 5 horas -> 1700ml
// Crianças consomem a metade do que um adulto consume

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");
let resultado = document.getElementById("resultado");
//criando as variáveis adultos,crianças, duração e resultado

function calcular(){

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qttTotalBebidas = bebidasPP(duracao) * adultos;
    let qtdTotalRefrigerante = refrigerantePP(duracao) * adultos + (refrigerantePP(duracao) / 2 * criancas);
    
    resultado.innerHTML = `<p>${qtdTotalCarne}g de Carne</p>`
    resultado.innerHTML += `<p>${qttTotalBebidas}ml de Bebidas</p>`
    resultado.innerHTML += `<p>${qtdTotalRefrigerante}ml de Refrigerante</p>`
}
//criando e configurando a função ''calcular''

function carnePP(duracao){
    if (duracao >= 5){
        return 600;
    }else{
        return 400;
    }
}

function bebidasPP(duracao){
    if (duracao >= 5){
        return 1600;
    }else{
        return 1000;
    }
}

function refrigerantePP(duracao){
    if (duracao >= 5){
        return 1700;
    }else{
        return 1000;
    }
}
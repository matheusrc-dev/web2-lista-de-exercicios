
function $(id) {
    return document.getElementById(id);
}

function trataEntrada(id) {
    let element = $(id);
    let erro = $('erro');
    if(isNaN(element.value) || element.value == "") {
        erro.style.color = "#FF2200"
        erro.innerHTML = "Erro: preencha os campos apenas com números";
    }else {
        erro.innerHTML = " ";
    }
}

function calculaConsumo() {

    let qtdKwh = parseFloat($("qtd-kwh").value);
    let valueKwh = parseFloat($("value-kwh").value);
    let result = $('result');
    let consumo;

    if (qtdKwh > 100 && qtdKwh < 200) {
        consumo = (qtdKwh * valueKwh) * 1.25;

    } else if(qtdKwh > 200) {
        consumo = (qtdKwh * valueKwh) * 1.50;
    }else{
        consumo = qtdKwh * valueKwh;
    }

    result.innerHTML = qtdKwh + " x " + valueKwh + " = " + consumo ;
    
    return false;
}

function calcIMC() {
    const peso = Number(prompt("Qual seu peso?"));
    const altura = Number(prompt("Qual sua altura?"));

    const IMC = peso / Math.pow(altura, 2)

    if (IMC < 18.5) {
        insertIMCValue(`Seu IMC é ${IMC.toFixed(2)} classificação: MAGREZA`);

    } if (IMC >= 18.5 && IMC < 24.9) {
        insertIMCValue(`Seu IMC é ${IMC.toFixed(2)} classificação: NORMAL`);

    } if (IMC >= 24.9 && IMC < 29.9) {
        insertIMCValue(`Seu IMC é ${IMC.toFixed(2)} classificação: SOBREPESO`);

    } if (IMC >= 29.9 && IMC < 39.9) {
        insertIMCValue(`Seu IMC é ${IMC.toFixed(2)} classificação: OBESIDADE`);

    } if (IMC >= 39.9) {
        insertIMCValue(`Seu IMC é ${IMC.toFixed(2)} classificação: OBESIDADE GRAVE`);

    }

}

function insertIMCValue(message) {
    let result = document.querySelector('div.result');
    result.removeChild(result.firstChild);
    alert(message);
    let classificacao = document.createElement('p');
    let text = document.createTextNode(message);
    classificacao.appendChild(text);
    result.appendChild(classificacao);
}
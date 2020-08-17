function triangleType() {
    let lado1 = Number(document.getElementById('side-one').value);
    let lado2 = Number(document.getElementById('side-two').value);
    let lado3 = Number(document.getElementById('side-three').value);
    

    if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
        alert('Todos os valores precisam ser maiores que 0');
        location.reload();
    } else if (lado1 == lado2 && lado2 == lado3) {
        insertValuesOnDocument('Triângulo equilátero');

    } else if ((lado1 == lado2 && lado2 != lado3) || (lado1 == lado3 && lado1 != lado2) || 
            (lado2 == lado3 && lado2 != lado1)) {
        insertValuesOnDocument('Triângulo isósceles');

    } else if(lado1 != lado2 && lado1 != lado3) {
        insertValuesOnDocument('Triângulo escaleno');
    }
}

function insertValuesOnDocument(mensagem) {
    let result = document.querySelector("div.result");
    result.removeChild(result.firstChild);
    
    let tipoDoTriangulo = document.createElement('p');
    let text = document.createTextNode(mensagem);
    tipoDoTriangulo.appendChild(text);

    result.appendChild(tipoDoTriangulo);
    console.log(text);
    alert(text.textContent);
}
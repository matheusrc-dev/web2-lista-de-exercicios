function triangleType() {
    let lado1 = Number(document.getElementById('side-one').value);
    let lado2 = Number(document.getElementById('side-two').value);
    let lado3 = Number(document.getElementById('side-three').value);
    let result = document.querySelector("div.result");
    result.removeChild(result.firstChild);
    let tipoDoTriangulo;
    let text

    if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
        alert('Todos os valores precisam ser maiores que 0');
        location.reload();
    } else if (lado1 == lado2 && lado2 == lado3) {
        tipoDoTriangulo = document.createElement('p');
        text = document.createTextNode('Triângulo equilátero');
        tipoDoTriangulo.appendChild(text);

        result.appendChild(tipoDoTriangulo);
        console.log(text);
        alert(text.textContent);
    } else if ((lado1 == lado2 && lado2 != lado3) || (lado1 == lado3 && lado1 != lado2) || 
            (lado2 == lado3 && lado2 != lado1)) {

        tipoDoTriangulo = document.createElement('p');
        text = document.createTextNode('Triângulo isósceles');
        tipoDoTriangulo.appendChild(text);

        result.appendChild(tipoDoTriangulo);
        console.log(text);
        alert(text.textContent);
    } else if(lado1 != lado2 && lado1 != lado3) {
        tipoDoTriangulo = document.createElement('p');
        text = document.createTextNode('Triângulo escaleno');
        tipoDoTriangulo.appendChild(text);

        result.appendChild(tipoDoTriangulo);
        console.log(text);
        alert(text.textContent);
    }
}
function $(id) {
    return document.getElementById(id);
}


$('form').onsubmit = function () {
    let um, cinco, dez, cinquenta, cem;

    let qtd = parseInt($('qtd').value);
    if (qtd < 0 || qtd > 600 || isNaN(qtd)) {
        alert('Insira um valor entre 0 e 600');
        return false;
    } else {
        //Notas de cem
        cem = Math.floor(qtd / 100); 
        qtd = qtd % 100;

        //Notas de Cinquenta
        cinquenta = Math.floor(qtd / 50);
        qtd =  qtd % 50;

        //Notas de dez
        dez = Math.floor(qtd / 10);
        qtd = qtd % 10;

        //Notas de cinco
        cinco = Math.floor(qtd / 5);
        //Notas de um
        um = qtd % 5;

        let result = $('result');

        result.innerHTML = cem + " Notas de 100" + "<br>" + cinquenta + " Notas de 50" + "<br>" + dez + " Notas de 10"
        + "<br>" + cinco + " Notas de 5" + "<br>" + um + " Notas de 1";
        result.style.display = 'inline-block';
        result.style.textAlign = 'start';



        alert('Sucesso!: suas notas foram contadas, CLIQUE EM "OK"');

        return false;
    }
}
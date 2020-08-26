function potencializacao() {
    let base = parseInt(document.getElementById('base').value);
    let expoente = parseInt(document.getElementById('expoente').value);
    let result = document.querySelector('div.result');
    let res;

    if(base == 0) {
        res = 0;
    }else if (base < 0 || isNaN(base) || isNaN(expoente)) {
        res = "## ERRO: Preencha os campos com valores numéricos positivos ##"
    }else if(expoente == 0) {
        res = 1;
    }else {
        //Função anônima
        (function(base, expoente) {
            res = base;
            for(let i = 0; i < expoente -1; i++) {
                res *= base;
            }
        })(base, expoente);
    }

    result.innerHTML = res;
}

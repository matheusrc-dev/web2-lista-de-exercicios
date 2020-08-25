(function ordena() {
    let inicial = document.querySelector("div.inicial");
    let inverso = document.querySelector("div.inverso");
    let alfCrescente = document.querySelector("div.alf-crescente");
    let linguagens = ["Java", "C", "Python", "Javascript", "Ruby", "Go", "Perl", "PHP", "R", "Typescript" ];
    let ordemInverso;
    let ordemACrescente;

    
    inicial.innerHTML = "Valores Iniciais, Linguagens: " + linguagens + "<br><br>";
    inverso.innerHTML = "Inverso: <br><br>";
    alfCrescente.innerHTML = "Alfabético Crescente: <br><br>";

    ordemInverso = linguagens.reverse();
    for(i in ordemInverso) {
        inverso.innerHTML += ordemInverso[i] + "<br>"; 
    }

    ordemACrescente = linguagens.sort();
    for(i in ordemACrescente) {
        alfCrescente.innerHTML += ordemACrescente[i] + "<br>"; 
    }
})();
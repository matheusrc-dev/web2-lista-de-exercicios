function placar () {
    let template = document.getElementById('template');
    let aux = template.innerHTML;
    
    let brScore =  +window.prompt("Placar do Brasil");
    let ww = window.prompt("Time adversário");
    let ss = +window.prompt("Pontuação do time adversário");

    if(brScore < 0 || ss < 0){
        window.alert("[ERRO] Preencha todos os campos corretamente");
    } else if ( ww == "" || isNaN(brScore) || isNaN(ss)){
        
        window.alert("[ERRO] Preencha todos os campos corretamente");
        
    } else{
        aux = aux.replace("YY", brScore);
        aux = aux.replace("WW", ww);
        aux = aux.replace("SS", ss);
    
        template.innerHTML = aux;
    }
}
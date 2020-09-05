function gerarTimes() {
    let titularesCOR = ["Cássio", "Walter", "Léo Santos", "Gil", "Danilo Avelar", "Bruno Méndez", "Sidcley", "Fágner", "Gabriel", "Mateus Vital", "Mauro Boselli"];
    let titularesCAP = ["Santos", "Jandrei", "Anderson Paixão", "Lucas Halter", "Thiago Heleno", "Zé Ivaldo", "Pedro Henrique", "Luan Patrick", "Márcio Azevedo", "Jonathan", "Khellven"];
    let selecao = [];
    let time1 = [];
    let time2 = [];

    //Pegar as listar onde vão aparecer os times
    let showTime1 = document.querySelector('ol.time1');
    let showTime2 = document.querySelector('ol.time2');
    selecao = selecao.concat(titularesCAP, titularesCOR);

    //Tasks:
    //Percorrer aleatoriamente a "selecao" até a metade e colocar esse valor na variavel "time1" 
    //e depois colocar o que sobrou aleatoriamente na "time2"

    //Pegar um item do array aleatoriamente, tirar ele da seleção e colocar ele no time1
    
    let count = selecao.length - 1;

    for (let i = 0; i < selecao.length; i++) {

        let temporary = selecao[Math.round(Math.random() * count)];
        time1.push(temporary);

        let indexElement = selecao.indexOf(temporary);

        selecao.splice(indexElement, 1);
    
        count--;
    }

    //Coloca o restante no time2
    time2 = selecao;

    showTime1.innerHTML = "<li>" + time1.join("<li>") +"</li>";
    showTime2.innerHTML = "<li>" + time2.join("<li>") +"</li>";

}
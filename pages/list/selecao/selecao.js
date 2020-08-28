let substituir;
let exibir = (selecao, jogadores) => {
    let res;
    res = `<li> ${selecao.join("<li>")} </li>`;
    jogadores.innerHTML = res;
}

(function init (exibir) {
    let titularesCOR = ["Cássio", "Walter", "Léo Santos", "Gil", "Danilo Avelar", "Bruno Méndez", "Sidcley", "Fágner", "Gabriel", "Mateus Vital", "Mauro Boselli"];
    let titularesCAP = ["Santos", "Jandrei", "Anderson Paixão", "Lucas Halter", "Thiago Heleno", "Zé Ivaldo", "Pedro Henrique", "Luan Patrick", "Márcio Azevedo", "Jonathan", "Khellven"];
    let selecao = [];
    let jogadores = document.querySelector('ol.jogadores');
    let crescente = document.getElementById('ordena-crescente');
    let decrescente = document.getElementById('ordena-decrescente');

    selecao = selecao.concat(titularesCOR, titularesCAP);

    crescente.addEventListener('click', () => {
        selecao.sort();
        exibir(selecao, jogadores);
    });

    decrescente.addEventListener('click', () => {
        selecao.sort();
        selecao.reverse();
        exibir(selecao, jogadores);
    });
    exibir(selecao, jogadores);


    substituir = () => {
        let nome = window.prompt("Nome do jogador a ser substituido");
        if(selecao.indexOf(nome) == -1) {
            window.alert("#ERRO:Nome não existe na lista, tente novamente#");
        } else {
            let novoNome = window.prompt("Novo nome do integrante");

            selecao.splice(selecao.indexOf(nome), 1, novoNome);
            exibir(selecao, jogadores);
        }
    }

})(exibir);




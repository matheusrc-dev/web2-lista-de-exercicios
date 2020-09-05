var banda = {
    nome: "Neyvana",
    quantidadeShowMes: 6,
    integrantes: ["João", "José", "Raimundo"]
}

var cantor = {
    nome: "Cantor",
    banda: banda,
    cacheShow: 200.000,
    mostraDados: function() {
        document.querySelector('div.result').innerHTML = `Nome: ${this.nome} Banda: ${this.banda.nome}`;
    },
    mostraFaturamento: function() {
        document.querySelector('div.result').innerHTML += "<br>" + `Faturamento: ${this.cacheShow * this.banda.quantidadeShowMes}`;
    }
}

cantor.mostraDados();
cantor.mostraFaturamento();
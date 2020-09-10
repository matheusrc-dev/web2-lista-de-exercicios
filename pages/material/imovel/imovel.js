class Imovel {
    constructor(endereco, preco) {
        this.endereco = endereco;
        this.preco = preco;
    }

    imprime() {
        document.querySelector('div.imovel').innerHTML = "Endereço: " + this.endereco + "<br>Preço: " + this.preco;
    }
}

class ImovelNovo extends Imovel {
    constructor(endereco, preco) {
        super(endereco, preco * 1.2);
    }

    imprime() {
        document.querySelector('div.imovel-novo').innerHTML = "Endereço: " + this.endereco + "<br>Preço: " + this.preco;
    }
}

class ImovelVelho extends Imovel {
    constructor(endereco, preco) {
        super(endereco, preco - (preco * 0.2));
    }

    imprime() {
        document.querySelector('div.imovel-velho').innerHTML = "Endereço: " + this.endereco + "<br>Preço: " + this.preco;
    }
}

(function main() {
    let i = new Imovel("Rua XV de Novembro, 1000", 300000);
    i.imprime();

    let iNovo = new ImovelNovo("Rua Capitão Frederico Virmond, 500", 175000);
    iNovo.imprime();

    let iVelho = new ImovelVelho("Candido Ribas, 51", 1000000);
    iVelho.imprime();

})();


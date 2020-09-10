class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

class Rica extends Pessoa {
    constructor(nome, idade, dinheiro) {
        super(nome, idade);
        this.dinheiro = dinheiro;
    }

    fazCompras() {
        document.getElementById('rica').innerHTML = this.nome + " faz compras";
    }
}

class Pobre extends Pessoa {
    constructor(nome, idade) {
        super(nome, idade);
    }

    trabalha() {
        document.getElementById('pobre').innerHTML = this.nome + " trabalha";
    }
}

class Miseravel extends Pessoa {
    constructor(nome, idade) {
        super(nome, idade);
    }

    mendiga() {
        document.getElementById('miseravel').innerHTML = this.nome + " mendiga";
    }
}

(function main() {
    let rica = new Rica("João", 25, 7000);
    rica.fazCompras();

    let pobre = new Pobre("Francisleidy", 30);
    pobre.trabalha();

    let miseravel = new Miseravel("Maikitaiçon", 20);
    miseravel.mendiga();
})();
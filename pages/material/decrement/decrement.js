(function () {
    //Cria objeto Customer
    let customer = {
        value: 10
    };

    //Metodos
    customer.show = function () {
        document.querySelector('.result').innerHTML = this.value;
    }

    //Define o método para decrementar o atributo do objeto até ele ser menor que 0
    customer.decrement = function () {
        let contagem = setInterval(() => { 
            this.show();
            this.value--;
            if(this.value < 0){
                clearInterval(contagem);
            }
        }, 1000);
    };

    //Chama o método para decrementar o atributo do objeto até ele ser menor que 0
    customer.decrement();
    

})();
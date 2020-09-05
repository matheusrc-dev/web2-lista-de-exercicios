let forma = {
    tipo: "",
    getTipo: function() {
        return this.tipo;
    }
}

let triangulo = Object.create(forma);
triangulo.tipo = "Triângulo";
triangulo.a = 5;
triangulo.b = 5;
triangulo.c = 5;
triangulo.getPerimetro = function() {
    return this.a + this.b + this.c;
}
//Adiciona o atributo "numeroLados" no objeto forma
triangulo.__proto__.numeroLados = null;
triangulo.numeroLados = 3;

console.log(triangulo.getTipo());
console.log(triangulo);
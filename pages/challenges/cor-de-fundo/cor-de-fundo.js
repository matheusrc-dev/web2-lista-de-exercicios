function mudaCor(cor) {
   
    document.body.style.backgroundColor = cor;  

    //console.log(cor);
}

window.onload = function() {
    let novaCor = $("muda-cor");
    novaCor.addEventListener("mouseover", function () {
        mudaCor("green");

        //console.log("mouse em cima do link");
    });
    novaCor.addEventListener("mouseout", function () {
        mudaCor("red");

        //console.log("mouse saiu do link");
    });
    novaCor.addEventListener("click", function () {
        alert("Muda a cor de fundo");

        //console.log("clicou!");
    });
}

let $ = function(id) {
    return document.getElementById(id);
}


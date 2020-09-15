window.onload = function() {
    let btnNumber = $("div#div-botao");
    let btnResult = $("div#div-resultado");
    

    btnNumber.addEventListener("mouseover", () => {
        btnResult.style.display = "block";
        btnResult.textContent = (Math.random() * 6).toFixed(0);
    });

    btnNumber.addEventListener("dblclick", () => {
        btnResult.style.display = "none";
    });
    
    
}

let $ = function(query) {
    return document.querySelector(query);
    
}
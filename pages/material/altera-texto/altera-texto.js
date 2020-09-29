(function() {
    let btnClick = document.querySelector('.generic-button');
    
    btnClick.addEventListener('click', function() {
        this.textContent = "Clicado!" ;
    });

    btnClick.addEventListener('dblclick', function() {
        this.textContent = "Clicado 2x" ;
    });

    btnClick.addEventListener('mouseover', function() {
        this.textContent = "Sai de cima!" ;
    });

    btnClick.addEventListener('mouseout', function() {
        this.textContent = "Clique aqui" ;
    });

})();
let redirect = document.getElementById('redirect');

redirect.addEventListener("mouseover", function(event) {
    event.target.style.color = "rgb(50, 73, 138)";
    

    setTimeout(function () {
        event.target.style.color = "";
        window.open("http://semana.tsi.gp.utfpr.edu.br");
    }, 5000);   
});
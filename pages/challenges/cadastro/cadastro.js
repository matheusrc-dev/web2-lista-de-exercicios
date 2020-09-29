let id = 0;

function $(id) {
    return document.getElementById(id);
}

(function () {
    let btnClick = document.querySelector('.generic-button');
    btnClick.addEventListener('click', function () {


        //Pega o textarea
        let users = $('users');

        //Dados do cadastrado
        let name = prompt("Digite seu nome: ");
        let email = prompt("Digite seu e-mail: ");

        users.value += `ID: ${id++}\nUsuário: ${name}\nEmail: ${email}\n\n`

    });
})();
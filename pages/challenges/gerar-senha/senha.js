function gerarSenha() {
    let result = document.querySelector('span.result');

    let alfLow = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"];
    let alfUpper =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z"];
    let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let generate = [];
    let senha = "";


    generate = generate.concat(alfLow, alfUpper, numbers);
    let count = generate.length - 1;

    for (let i = 0; i < 10; i++) {

        let temporary = generate[Math.round(Math.random() * count)];
        senha += temporary;

        let indexElement = generate.indexOf(temporary);
        generate.splice(indexElement, 1);
    
        count--;
    }

    result.innerHTML = senha;
}
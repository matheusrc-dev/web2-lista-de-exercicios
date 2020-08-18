function startConcurso() {
    let candidatas = [];
    let candidata = {};
    let maiorPontuacao = -1;
    let menorPontuacao = 999;
    let numeroMaior, alturaMaior, rendimentoMaior, numeroMenor, alturaMenor, rendimentoMenor;

    for (i = 0; i < 3; i++) {
        let numero = Number(prompt("Numero da Candidata: "));
        let altura = Number(prompt("Altura em metros (ex: 1.72)"));
        let rendimento = Number(prompt("Rendimento no ensino médio (entre 0 e 1)"));

        if (isNaN(numero) || isNaN(altura) || isNaN(rendimento)) {
            alert("Preencha todos os campos com valores numéricos");
            startConcurso();
        }
        if (altura > 2.2 || rendimento > 1) {
            alert("Revise os campos e preencha-os corretamente");
            startConcurso();
        }


        candidata = {
            "numero": numero,
            "altura": altura,
            "rendimento": rendimento,
            "pontuacao": altura + rendimento
        };

        candidatas.push(candidata);

        // console.log(i);
        // console.log(candidata);
        // console.log(candidatas);
    }


    candidatas.forEach(candidata => {
        if (candidata.pontuacao > maiorPontuacao) {
            numeroMaior = candidata.numero;
            alturaMaior = candidata.altura;
            rendimentoMaior = candidata.rendimento;
            maiorPontuacao = candidata.pontuacao;
        }
        if (candidata.pontuacao < menorPontuacao) {
            numeroMenor = candidata.numero;
            alturaMenor = candidata.altura;
            rendimentoMenor = candidata.rendimento;
            menorPontuacao = candidata.pontuacao;
        }
    });

    let result = document.querySelector('div.result');
    result.removeChild(result.lastChild);
    let classificacao1 = document.createElement('p');
    let classificacao2 = document.createElement('p');
    let text1 = document.createTextNode(`Maior pontuação ${maiorPontuacao.toFixed(2)}, Numero: ${numeroMaior}, Altura: ${alturaMaior}, Rendimento: ${rendimentoMaior}`);
    let text2 = document.createTextNode(`Menor pontuação ${menorPontuacao.toFixed(2)}, Numero: ${numeroMenor}, Altura: ${alturaMenor}, Rendimento: ${rendimentoMenor}`);

    classificacao1.appendChild(text1);
    classificacao2.appendChild(text2);
    result.appendChild(classificacao1);
    result.appendChild(classificacao2);


    console.log(maiorPontuacao);
    console.log(menorPontuacao);

    let premio = document.querySelector('button.premio');
    premio.removeAttribute('hidden');
}

function premio() {
    location.href = "https://pt.wikipedia.org/wiki/Pr%C3%AAmio";
}


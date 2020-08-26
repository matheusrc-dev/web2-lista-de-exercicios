let hoje;
let natal;
let distancia;
let dias;
let horas;
let min;
let seg;
let count;
let result;

let contagemRegressia = () => {
    //Calcule a diferença de tempo até o dia 
    hoje = new Date();
    distancia = natal.getTime() - hoje.getTime();

    seg = Math.floor(distancia / 1000);
    min = Math.floor(seg / 60);
    horas = Math.floor(min / 60);
    dias = Math.floor(horas / 24);

    seg %= 60;
    min %= 60;
    horas %= 24;

}

(function (contagemRegressia) {

    window.addEventListener('load', count, false);
    //Pegue a data para o natal
    natal = new Date(2020, 11, 25, 0, 0, 0);
    result = document.querySelector('div.result');

    count = setInterval(() => {

        contagemRegressia(hoje, natal, distancia, seg, min, horas, dias);
        if (distancia <= 0) {
            result.innerHTML = `Feliz Natal!`;
            clearInterval(count);
        }
        result.innerHTML = `${dias} Dias ${horas} Horas ${min} Minutos ${seg} Segundos`;
    }, 1000);

})(contagemRegressia);


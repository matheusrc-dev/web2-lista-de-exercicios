const minMedia = 6.0, minFreq = 0.75;
let media;
let percentagemFrequencia;

(function ehAprovado(calcularMedia, calcularPercentagemFrequencia) {
    let n1 = Number(window.prompt('Nota um'));
    let n2 = Number(window.prompt('Nota dois'));
    let aulas = Number(window.prompt('Total de aulas'));
    let freq = Number(window.prompt('Quantidade de aulas frequentadas'));
    
    calcularMedia(n1, n2);
    calcularPercentagemFrequencia(freq, aulas);

    let result = document.querySelector('div.result');
    if (media >= minMedia && percentagemFrequencia >= minFreq) {
        result.innerHTML = `aluno APROVADO `;
    } else {
        result.innerHTML = `aluno REPROVADO `;
    }

    result.innerHTML += `Media final: ${media.toFixed(1)} Frequencia: ${(percentagemFrequencia * 100).toFixed(1)}%`;
})(function (n1, n2) {
    media = (n1 + n2) / 2;
}, (freq, aulas) => {
    percentagemFrequencia = freq / aulas;
});
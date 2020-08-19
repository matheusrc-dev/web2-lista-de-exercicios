const minMedia = 6.0, minFreq = 0.75;

function ehAprovado(calcularMedia, calcularPercentagemFrequencia) {
    let media, percentagemFrequencia;

    let n1 = Number(document.getElementById('nota1').value);
    let n2 = Number(document.getElementById('nota2').value);
    
    let freq = Number(document.getElementById('freq').value);
    let aulas = Number(document.getElementById('aulas').value);
    
    
    calcularMedia = (function() {
        media = (n1 + n2) / 2
    })();

    calcularPercentagemFrequencia = (() => {
        percentagemFrequencia = freq / aulas;
    })();

    let result = document.querySelector('div.result');
    if(media >= minMedia && percentagemFrequencia >= minFreq) {
        result.innerHTML = `aluno APROVADO `;
    }else {
        result.innerHTML = `aluno REPROVADO `;
    }

    result.innerHTML += `Media final: ${media.toFixed(1)} Frequencia: ${(percentagemFrequencia * 100).toFixed(1)}%`;
}
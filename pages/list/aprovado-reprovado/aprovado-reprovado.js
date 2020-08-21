function finalDoSemestre () {
    const minMedia = 6.0, minFreq = 0.75;
    let calcularMedia = function (n1, n2) {
        return (n1 + n2) / 2;
    };
    
    let calcularPercentagemFrequencia =  (freq, aulas) => {
        return freq / aulas;
    };
    
    (function ehAprovado(calcularMedia, calcularPercentagemFrequencia) {
        let n1 = parseFloat(document.getElementById('nota1').value);
        let n2 = parseFloat(document.getElementById('nota2').value);
        let aulas = parseFloat(document.getElementById('aulas').value);
        let freq = parseFloat(document.getElementById('frequencia').value);
        let media;
        let percentagemFrequencia;
    
        media = calcularMedia(n1, n2);
        percentagemFrequencia = calcularPercentagemFrequencia(freq, aulas);
    
        let result = document.querySelector('div.result');
        if (media >= minMedia && percentagemFrequencia >= minFreq) {
            result.innerHTML = `aluno APROVADO `;
        } else {
            result.innerHTML = `aluno REPROVADO `;
        }
    
        result.innerHTML += `Media final: ${media.toFixed(1)} Frequencia: ${(percentagemFrequencia * 100).toFixed(1)}%`;
    })(calcularMedia, calcularPercentagemFrequencia);
}

let $id = function (id) {
  return document.getElementById(id);
}

//Declaração de variáveis
let facts = [];
let imgHover = $id('img-chuck');
let randomFact = $id('p-chuck-fact');
randomFact.style.visibility = 'hidden';
let fact = $id('textarea-fact');

fact.addEventListener('invalid', function(event) {
  if(fact.validity.valueMissing){
    fact.setCustomValidity('Chuck Norris sabe o valor de uma variável nula e ainda pode ordenar por este valor, mas ele não aceita valores vazios. Favor preencher');
  }else {
    fact.setCustomValidity('');
  }
});


//Valida o Fato
function factValidation() {

  facts.push(fact.value);

  alert("Fato cadastrado com sucesso!");

  //Apaga o conteúdo e foca no TEXTAREA
  fact.value = "";
  fact.focus();

  return false;
}

//Ao passar o mouse mostra o fato abaixo da imagem
imgHover.addEventListener('mouseover', showFact);

//Ao passar o mouse esconde o fato
imgHover.addEventListener('mouseout', removeFact);

function showFact() {
  if(facts.length > 0) {
    randomFact.style.visibility = 'visible';
    let randomIndex = Math.round(Math.random() * (facts.length - 1));
  
    randomFact.textContent = facts[randomIndex];
  }
}

function removeFact() {
  randomFact.style.visibility = 'hidden';
}

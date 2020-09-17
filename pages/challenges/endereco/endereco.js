//definição de um Map
var enderecosPorCepMap = new Map();
enderecosPorCepMap.set("85000-000", "Rua Paraná, Guarapuava - PR");
enderecosPorCepMap.set("85001-000", "Rua Santa Catarina, Guarapuava - PR");
enderecosPorCepMap.set("85201-000", "Rua Bahia, Guarapuava - PR");

function $(id) {
    return document.getElementById(id);
}

document.querySelector("#input-cep").onkeypress = function(event) {
    var code = event.charCode;
    if(!((code >= 48 && code <= 57) || code == 46 || code == 45)) {
        event.preventDefault();
    }
}

document.querySelector("#input-cep").addEventListener("blur", function () {
    var cep = document.querySelector("input#input-cep").value;
    $("input-endereco").setAttribute("disabled", true);

    
    //busca de um endereço pelo CEP na Map
    var endereco = enderecosPorCepMap.get(cep);

    
    //TODO caso endereço não seja undefined, apresentar o endereço no campo correspondente
    if(endereco == undefined || cep.length > 9 ) {
        alert("Oppss! O endereço não foi encontrado.");
    }else {
        $("input-endereco").removeAttribute("disabled");
        $("btnSubmit").removeAttribute("disabled");
        $("input-endereco").value = endereco;
    }
});

/**
    Verifica se os dois campos estão preenchidos e então simula o envio dos dados ao servidor. Ou seja, se estiverem preenchidos, um alert é apresentado informando que os dados foram enviados com sucesso ao servidor. 
*/
function validador() {
    //TODO
    alert("Os dados foram enviados com sucesso!");
    return false;
}

//preciso fazer o JS conversar com meu HTML e adicionar o script na linha 63 do HTML//
//console.log("JavaScript carregado");//

function validaCPF(cpf) {
    console.log(cpf.length);
    if (cpf.length != 11) {
        return false;
    }   else {
        var numeros = cpf.substring(0, 9);   
        var digitos = cpf.substring(9);

            var soma = 0;
            for (var i = 10; i> 1; i--) {
                soma += numeros.charAt(10 - i) * i;
            }

            var resultado = (soma % 11) < 2  ? 0 : 11 - (soma % 11);

            // validacao do 1ero digito//
            if(resultado != digitos.charAt(0)) {
                return false;
            }
            // retorno da validacao do 1ero digito
            //console.log(digitos.toString().charAt(0) + " é a primeira posicao da variável soma ");

            soma = 0;
                numeros = cpf.substring(0, 10);

                for (var k = 11; k > 1; k--) {
                    soma += numeros.charAt(11 - k) * k;
                }

                resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

            // validacao do 2do digito//
                if(resultado != digitos.charAt(1)) {
                    return false;
                }
                
            //console.log("numeros o cpf " + numeros); rescata 9 numeros do CPF
            //console.log("digito do cpf " + digitos); rescata 2 ultimos digitos do CPF
        return true;
        }
}

//preciso criar funcao para validar o CPF depois agregar funcao no HTML linha 42//
function validacao() {
    console.log("Iniciando validacao CPF");
    document.getElementById("success").style.display ="none";
    document.getElementById("error").style.display ="none";

    //ensinar JS a capturar elementos do HTML com document.get.//
    //O CPF digitado sera capturado no js e almacenado na variavel cpf//
    var cpf = document.getElementById("cpf_digitado").value; 
    //en paralelo preciso indicar no HTML do cpf_digitado na linha 38//
    //agora perguntar se a validacao do CPF é verdadeira com variavel resultado validacao//
    // e agregar funcao "validaCPF" linha 4
        var resultadoValidacao = validaCPF(cpf);

        if (resultadoValidacao) { //se a validacao é true vou exibir texto linha 47 do HTML
            document.getElementById("success").style.display = "block";
        } 
        else {
            document.getElementById("error").style.display = "block";
        }

    //agora vai exhibir esse valor com console//
    console.log(cpf);
}
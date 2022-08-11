 //COLOCANDO EM UMA VARIAVEL O ELEMENTO QUE EU QUERO ALTERAR COM JAVASCRIPT
var titulo = document.querySelector(".titulo");
    //MUDANDO O VALOR DA VARIAVEL, PARA O TITULO QUE EU QUERO!
titulo.textContent = "Calcule o seu IMC"

//querySelector: traz somente um conteudo
//querySelectorAll: traz todos os conteudo que tenha a class ou id que vocêpassar

var pacientes = document.querySelectorAll(".paciente")

for(var i = 0; i <= pacientes.length; i++){//en quanto o i for menor que minha lista de pacientes, execute esse bloco de codigo

    var paciente = pacientes[i]//a cada execução do for avariavel paciente muda comforme o que vir da lista

    var tdpeso = paciente.querySelector(".info-peso");
    var peso = tdpeso.textContent

    var tdaltura = paciente.querySelector(".info-altura")
    var altura = tdaltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEValido = true;//tratamento pra saber se o numero e valido pra calcular o imc
    var alturaEValida= true;

if(peso <= 0 || peso >= 300){// CONDIÇÃO SE PESO FOR MENOR OU IGUAL 0, 0 OU ALTURA FOR MAIOR OU IGUAL A 3.00
    //console.log("Peso invalido!");
    pesoEValido = false;
    tdImc.textContent = "Peso inválido";
    paciente.classList.add("paciente-invalido")//setei uma nova cass no CSS, e chamo ela aqui quando o pesso estiver errado
}

if(altura <=0 || altura >= 3.00){
    //console.log("Altura inválida");
    alturaEValida = false;
    alturaEValida.textContent ="Altura inválida!";
    paciente.classList.add("paciente-invalido");
}

if(alturaEValida && pesoEValido){// CONDICIONAL SE OS DOUS FOREM TRUE EXECUTE ESSE BLOCO!
    var imc = peso / (altura * altura);
    tdImc.textContent = imc.toFixed(2);//toFixed com ele eu escolho quantas casas decimais pode ter, pra ficar mais bonito no front 
}

}

function calculaImc(peso, altura){
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);

}



  










			
		
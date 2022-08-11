


var botaoAdcionar = document.querySelector("#adicionar-paciente");// buscando do mundo HTML o meu botão adicionar
botaoAdcionar.addEventListener("click",function(e){//adicionando ao botão o evento ecutar o click, quando clicar fazer o que tem no bloco da function
    e.preventDefault();// parando o evento de dar refresh e apagar tudo que tem no formulario
    //console.log("oi cliquei no botão");


    var form = document.querySelector("#form-adiciona")//buscando o que tem dentro do formulario
    //EXTRAINDO INFORMAÇÕES DO PACIENTE DO FORM
    var nome = form.nome.value;//buscando o que for digitado no formulario, e pegando o seu value= valor e colocando na variavel! 
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    //Cria a tr e a td do paciente
    var pacienteTr = document.createElement("tr");//criando uma "tr" no mundo js
 
    var nomeTd =document.createElement("td");//criando uma "td" no mundo js
    var pesoTd =document.createElement("td");
    var alturaTd =document.createElement("td");
    var gorduraTd =document.createElement("td");
    var imcTd =document.createElement("td");

    nomeTd.textContent = nome;//colocando como conteudo de uma td, o que vir na variavel nome, que recebe o que vir do formulario
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura; 
    imcTd.textContent = calculaImc(peso, altura);//usando a função calculaimc, para calcular o imc cos clientes que forem adicionados via formulario
    
    pacienteTr.appendChild(nomeTd);//colocando o as Tds como filhas da tr, assin montando um HTML correto!
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);
 
    //Adiciona o paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");//puxando o id da minha tabela do HTML, onde fica todas as minhas trs dentro dela

    tabela.appendChild(pacienteTr);//colocando todo o conteudo da minha tr, que são as minhas tds, com o peso,altura etc... como filha da minha tabela!
    
  });

  function obtemPacienteDoFormulario(){
    
  }
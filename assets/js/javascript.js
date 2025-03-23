
const botao = document.querySelector("#enviar"); /*Cria botao para receber a tag button*/
let verify = document.querySelector("#retorno");/* cria para receber a tag div*/

botao.addEventListener("click", mensagemTELA); /* executa função ao clicar em botao*/

function mensagemTELA(){
    var nome = document.querySelector("#name").value; /*recebe input*/
    var email = document.querySelector("#email").value; /*recebe input*/
    var unidade = document.querySelector("#unidade").value; /*recebe input*/
    var solicitacao = document.querySelector("#solicitacao").value; /*recebe input*/

    if (!nome || !email || !unidade || !solicitacao){
        verify.innerHTML = "Por favor, preencha todos os campos!!"; /*Exibe mensagem de vazio, de houver*/
    }
    else {  
        /*Quando eu criar um banco de dados para inserir as infos,
        irei adicionar um IF nessa linha*/
        alert(`Olá, ${nome}, sua solicitação "${solicitacao}" foi registrada em nosso sistema.`); /*Alerta sucesso*/
        window.location.href = "confirma.html"; /*Encaminha pra a página final de confirmação*/
    }

}


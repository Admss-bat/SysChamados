let nome = document.querySelector("#name");
const email = document.querySelector("#email");
const unidade = document.querySelector("#unidade");
const solicitacao = document.querySelector("#solicitacao");



function mensagemTELA(){
    retorno.innerHTML = `nome é ${nome}, email é ${email}, unidade é ${unidade} e solicitação é ${solicitacao}`;
    console.log(retorno);
}
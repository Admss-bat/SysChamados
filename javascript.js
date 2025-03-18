const nome = document.querySelector("#name");
const email = document.querySelector("#email");
const unidade = document.querySelector("#unidade");
const solicitacao = document.querySelector("#solicitacao");

const x = document.querySelector("#enviar")

let mensagem = document.querySelector("#retorno")


x.addEventListener("click", mensagemTELA);


function mensagemTELA(){
    retorno.innerHTML = `nome é ${nome}, email é ${email}, unidade é ${unidade} e solicitação é ${solicitacao}.`;

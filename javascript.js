
const botao = document.querySelector("#enviar");
let verify = document.querySelector("#retorno");

botao.addEventListener("click", mensagemTELA);

function mensagemTELA(){
    var nome = document.querySelector("#name").value;
    var email = document.querySelector("#email").value;
    var unidade = document.querySelector("#unidade").value;
    var solicitacao = document.querySelector("#solicitacao").value;

    if (!nome || !email || !unidade || !solicitacao){
        verify.innerHTML = "Por favor, preencha todos os campos";
    }
    else {   
        alert(`Olá, ${nome}, sua solicitação "${solicitacao}" foi registrada em nosso sistema.`);
        window.location.href = "confirma.html";
    }

}


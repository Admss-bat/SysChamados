
const botao = document.querySelector("#enviar"); /*Cria botao para receber a tag button*/
let verify = document.querySelector("#retorno");/* cria para receber a tag div*/


botao.addEventListener("click", mensagemTELA); /* executa função ao clicar em botao*/

document.querySelector("#name").addEventListener("input", function () {   // Remove números e caracteres especiais enquanto digita
    this.value = this.value.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ\s]/g, ""); 
});

async function mensagemTELA(){
    var nome = document.querySelector("#name").value; /*recebe input*/
    var email = document.querySelector("#email").value; /*recebe input*/
    var unidade = document.querySelector("#unidade").value; /*recebe input*/
    var solicitacao = document.querySelector("#solicitacao").value; /*recebe input*/

    if (!nome || !email || !unidade || !solicitacao){   /*Exibe mensagem de espaço vazio, de houver*/
        alert("Por favor, preencha todos os campos!!"); 
        return; 
    }
    else {  
        
        const chamado = {  //Cria o Objeto chamado.
            solicitante: nome,
            email: email,
            unidade: unidade,
            solicitacao: solicitacao
        }
        try{

            botao.disabled = true;  //impede o botão de ser clicado novamente.
            botao.textContent = "Enviando...";

            const response = await fetch('https://projetinho-production-7c38.up.railway.app/chamado',{ //Faz requisição ao banco de dados e armazenando resposta na variável.
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(chamado)  //formata o objeto em texto JSON
            });
        
            if(response.ok){ //Verifica resposta do server: se ok ou não.

                window.location.href = "confirma.html"; // Encaminha pra a página final de confirmação
        
            } else {
                const erroData = await response.json(); // Armazena a resposta do banco de dados como string na variável
                alert("Erro ao registrar o chamado: " + (erroData.message || "Erro desconhecido.")); // Alerta de erro.

            }
        } catch (error){
            console.error("erro ao enviar a solicitação: ", error);
            alert("Erro de conexão! Verifique sua internet ou tente novamente mais tarde.");
        }
    }
};


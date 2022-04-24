Olá! Este é um arquivo contendo o código JS (JavaScript) do web site sobre a Ada Lovelace!
P.S: Arquivo incluído no repositório siteADA

document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function    validaFormulario (){
  if (document.getElementById ("nome").value != "" &&
  document.getElementById ("email").value != "" &&
  document.getElementById ("telefone").value != ""){
  alert("Prontinho! Você receberá as novidades por email.")
  }else{
    alert("Por favor, preencha os campos nome, email e telefone.")
  }
}

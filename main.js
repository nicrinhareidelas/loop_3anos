
function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("Qual o melhor professor?");

    
    if (respostaTime.toLowerCase() === "christian") {
      alert("Isso mesmo! O professor christian é o melhor professor");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("Não é isso!Dica:ele dá aula de português. Tente novamente.");
    }
  }
}

// Chamada da função para iniciar o processo
verificarTime();

  

document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todas as imagens com a classe "plus"
    var imagensPlus = document.querySelectorAll(".plus");
  
    // Adiciona um ouvinte de evento para cada imagem
    imagensPlus.forEach(function(imagem) {
      imagem.addEventListener("click", function() {
        // Seleciona o elemento <p> irmão da imagem
        var conteudo = imagem.nextElementSibling;
  
        // Verifica se o conteúdo está visível
        if (conteudo.style.display === "block") {
          // Se estiver visível, oculta o conteúdo e troca o ícone para plus
          conteudo.style.display = "none";
          imagem.src = "assets/images/icon-plus.svg";
        } else {
          // Se estiver oculto, exibe o conteúdo e troca o ícone para minus
          conteudo.style.display = "block";
          imagem.src = "assets/images/icon-minus.svg"; // Substitua pelo caminho da imagem de ícone de menos
        }
      });
    });
  });
  
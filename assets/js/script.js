document.addEventListener("DOMContentLoaded", function () {
    let carousel = document.querySelector(".carousel");
    let items = carousel.querySelectorAll(".item");
    let dotsContainer = document.querySelector(".dots");
    let odsSection = document.querySelector(".ods");
    let gradients = [
      "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 24%, rgba(0,212,255,1) 100%)", // Gradiente 1
      "linear-gradient(90deg, rgba(11,105,13,1) 0%, rgba(15,148,15,1) 34%, rgba(72,249,1,1) 100%)", // Gradiente 2
      "linear-gradient(90deg, rgba(105,11,31,1) 0%, rgba(217,15,64,1) 42%, rgba(240,134,134,1) 100%)", // Gradiente 3
      "linear-gradient(90deg, rgba(195,103,0,1) 0%, rgba(255,158,51,1) 42%, rgba(247,218,105,1) 100%)", // Gradiente 4
      "linear-gradient(90deg, rgba(0,2,195,1) 0%, rgba(51,149,255,1) 43%, rgba(105,245,247,1) 100%)", // Gradiente 5
      "linear-gradient(45deg, #33FFD7, #A9FF33)"  // Gradiente 6
    ];
  
    // Inserindo dots
    items.forEach((_, index) => {
      let dot = document.createElement("span");
      dot.classList.add("dot");
      if (index === 0) dot.classList.add("active");
      dot.dataset.index = index;
      dotsContainer.appendChild(dot);
    });
  
    let dots = document.querySelectorAll(".dot");
  
    // Função para mostrar um item e mudar o background para gradiente
    function showItem(index) {
      items.forEach((item, idx) => {
        item.classList.remove("active");
        dots[idx].classList.remove("active");
        if (idx === index) {
          item.classList.add("active");
          dots[idx].classList.add("active");
        }
      });
  
      odsSection.style.backgroundImage = gradients[index];
    }
  
    // Navegação com botões
    document.querySelector(".prev").addEventListener("click", () => {
      let index = [...items].findIndex((item) => item.classList.contains("active"));
      showItem((index - 1 + items.length) % items.length);
    });
  
    document.querySelector(".next").addEventListener("click", () => {
      let index = [...items].findIndex((item) => item.classList.contains("active"));
      showItem((index + 1) % items.length);
    });
  
    // Navegação com dots
    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        let index = parseInt(dot.dataset.index);
        showItem(index);
      });
    });
  
    // Exibir o primeiro item e aplicar o gradiente correspondente ao carregar a página
    showItem(0);
  });
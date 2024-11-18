document.addEventListener("DOMContentLoaded", function () {
    let carousel = document.querySelector(".carousel");
    let items = carousel.querySelectorAll(".item");
    let dotsContainer = document.querySelector(".dots");
    let odsSection = document.querySelector(".ods");
    let odsImg = document.getElementById("odsimg");
  
    // background gradientes
    let gradients = [
      "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 24%, rgba(0,212,255,1) 100%)", 
      "linear-gradient(90deg, rgba(11,105,13,1) 0%, rgba(15,148,15,1) 34%, rgba(72,249,1,1) 100%)", 
      "linear-gradient(90deg, rgba(105,11,31,1) 0%, rgba(217,15,64,1) 42%, rgba(240,134,134,1) 100%)", 
      "linear-gradient(90deg, rgba(195,103,0,1) 0%, rgba(255,158,51,1) 42%, rgba(247,218,105,1) 100%)",
      "linear-gradient(90deg, rgba(0,2,195,1) 0%, rgba(51,149,255,1) 43%, rgba(105,245,247,1) 100%)", 
      "linear-gradient(45deg, #33FFD7, #A9FF33)"  
    ];
    //images ods
    const images = [
      "assets/img/blue.png",
      "assets/img/green.png",
      "assets/img/pink.png",
      "assets/img/orange.png",
      "assets/img/azulagua.png",
      "assets/img/verdefloresta.png"
  ];

    items.forEach((_, index) => {
      let dot = document.createElement("span");
      dot.classList.add("dot");
      if (index === 0) dot.classList.add("active");
      dot.dataset.index = index;
      dotsContainer.appendChild(dot);
    });
  
    let dots = document.querySelectorAll(".dot");
    

    function showItem(index) {

      //opacidade ease out
      odsSection.style.opacity = 0;
      odsImg.classList.add("rotate");

      setTimeout(() => {
        items.forEach((item, idx) => {
            item.classList.remove("active");
            dots[idx].classList.remove("active");
            if (idx === index) {
                item.classList.add("active");
                dots[idx].classList.add("active");
            }
        });

      items.forEach((item, idx) => {
        item.classList.remove("active");
        dots[idx].classList.remove("active");
        if (idx === index) {
          item.classList.add("active");
          dots[idx].classList.add("active");
        }
      });
      
      //mudar background
      odsSection.style.backgroundImage = gradients[index];
      //mudar imagem
      odsImg.src = images[index];

      // opacidade ease in
      odsSection.style.opacity = 1;
    }, 500); //tempo
    
    //animação rotação
    odsImg.addEventListener("transitionend", () => {
      odsImg.classList.remove("rotate");
  }, { once: true });

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
  
  function carregarDicas() {
    fetch('/assets/json/dicas.json')
      .then(response => response.json()) 
      .then(data => {
        const dicaContainer = document.getElementById('boxdicas');
        
        dicaContainer.innerHTML = '';

        data.forEach(dicaItem => {
          // Para cada dicaItem, criamos uma card
          const cardHTML = `
            <div class="card dica" style="width: 18rem; height: 28rem; margin: 10px;">
              <div class="card-body">
                <h5 class="card-title" style="text-align: center; color: #4e537e; font-size: x-large;">${dicaItem.titulo}</h5>
                <p class="card-text" style="color: #27644a; font-size: larger; padding-left: 15px;">
                  ${dicaItem.dicas.join('<br>')}
                </p>
                <a href="${dicaItem.botao}" target="_blank" style="color: green; text-decoration: none; display: block; text-align: center; font-size: x-large;" class="card-link">
                  Saiba Mais
                </a>
              </div>
            </div>
          `;
          
          // Adiciona o HTML da card ao container
          dicaContainer.innerHTML += cardHTML;
        });
      })
      .catch(error => console.error('Erro ao carregar o JSON:', error));
  }
  
  document.addEventListener('DOMContentLoaded', carregarDicas);

  const showOutfit = () =>{
    document.getElementById("first").style.display = 'block';
    document.getElementById("second").style.display = 'none';
    document.getElementById("third").style.display = 'none';
    document.getElementById("four").style.display = 'none';
    document.getElementById("five").style.display = 'none';
  }
  const showOutfit2 = () =>{
    document.getElementById("first").style.display = 'none';
    document.getElementById("second").style.display = 'block';
    document.getElementById("third").style.display = 'none';
    document.getElementById("four").style.display = 'none';
    document.getElementById("five").style.display = 'none';
  }
  const showOutfit3 = () =>{
    document.getElementById("first").style.display = 'none';
    document.getElementById("second").style.display = 'none';
    document.getElementById("third").style.display = 'block';
    document.getElementById("four").style.display = 'none';
    document.getElementById("five").style.display = 'none';
  }
  const showOutfit4 = () =>{
    document.getElementById("first").style.display = 'none';
    document.getElementById("second").style.display = 'none';
    document.getElementById("third").style.display = 'none';
    document.getElementById("four").style.display = 'block';
    document.getElementById("five").style.display = 'none';
  }
  const showOutfit5 = () =>{
    document.getElementById("first").style.display = 'none';
    document.getElementById("second").style.display = 'none';
    document.getElementById("third").style.display = 'none';
    document.getElementById("four").style.display = 'none';
    document.getElementById("five").style.display = 'block';
  }
document.addEventListener('DOMContentLoaded', () => {
    carregarDicas();
  });
  
  function carregarDicas() {
    fetch('https://flask-ecoturismo-humbertosamora.replit.app/dicas/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro na requisição: ' + response.status);
        }
        return response.json();
      })
      .then(data => {
        console.log('Dados carregados:', data);

        const boxDicas = document.querySelector('#boxdicas');
        if (!boxDicas) {
          console.error("Elemento '#boxdicas' não foi encontrado");
          return;
        }
        boxDicas.innerHTML = '';
  
        data.forEach(dica => {
            
          const divDica = document.createElement('div');
          divDica.classList.add('dica');


          const titulo = document.createElement('h3');
          titulo.textContent = dica.titulo; 
          divDica.appendChild(titulo);
  

          const descricao = document.createElement('p');
          descricao.textContent = dica.descricao; 
          divDica.appendChild(descricao);
  

          const botao = document.createElement('a');
          botao.textContent = 'Saiba mais';
          botao.href = dica.link; // 
          botao.classList.add('btn', 'btn-primary'); 
          divDica.appendChild(botao);


          boxDicas.appendChild(divDica);
        });
      })
      .catch(error => {
        console.error('Erro ao carregar dicas:', error);
  
        const boxDicas = document.querySelector('#boxdicas');
        if (boxDicas) {
          boxDicas.innerHTML = `
            <div class="dica">
              <p class="text-danger">Não foi possível carregar as dicas no momento. Por favor, tente novamente mais tarde.</p>
            </div>
          `;
        }
      });
  }
  
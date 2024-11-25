document.addEventListener('DOMContentLoaded', () => {
    carregarDicas();
  });

  function carregarDicas() {
    //fetch('assets/json/dicas.json')
    fetch('https://flask-ecoturismo-humbertosamora.replit.app/dicas/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro na requisição: ' + response.status);
        }
        return response.json();
      })
      .then(data => {
        console.log('Dados carregados:', data);

        const row = document.querySelector('#dicasapi .row');
        if (!row) {
          console.error("Elemento '.row' não foi encontrado dentro de '#dicasapi'");
          return;
        }

        // Limpa o conteúdo anterior (se necessário)
        row.innerHTML = '';

        // Itera sobre os dados retornados
        data.forEach(dica => {
          const col = document.createElement('div');
          col.className = 'col-lg-4 col-md-6 mb-4';

          const card = document.createElement('div');
          card.className = 'card';
          card.style = 'width: 18rem; background-color: white;';

          const cardBody = document.createElement('div');
          cardBody.className = 'card-body';

          const title = document.createElement('h5');
          title.className = 'card-title text-center';
          title.textContent = dica.titulo;

          const description = document.createElement('p');
          description.className = 'card-text text-center';
          description.textContent = dica.descricao;

          const link = document.createElement('a');
          link.href = dica.link;
          link.className = 'card-link';
          link.style = 'display: block; text-align: center;';

          const button = document.createElement('button');
          button.type = 'button';
          button.className = 'btn btn-success';
          button.textContent = 'Saiba Mais';

          link.appendChild(button);
          cardBody.appendChild(title);
          cardBody.appendChild(description);
          cardBody.appendChild(link);
          card.appendChild(cardBody);
          col.appendChild(card);
          row.appendChild(col);
        });
      })
      .catch(error => {
        console.error('Erro ao carregar dicas:', error);

        const row = document.querySelector('#dicasapi .row');
        if (row) {
          row.innerHTML = `
            <div class="col-12">
              <p class="text-danger">Não foi possível carregar as dicas no momento. Por favor, tente novamente mais tarde.</p>
            </div>
          `;
        }
      });
  }
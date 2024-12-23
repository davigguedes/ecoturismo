const inicial = document.querySelector('#inicial');
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY; // Distância rolada
    const maxScroll = 700; // Altura máxima para desaparecer

    // Calcula a opacidade com base na rolagem
    const opacity = Math.max(0, 1 - scrollTop / maxScroll);
    inicial.style.opacity = opacity;
});



// Carrega as empresas

document.addEventListener('DOMContentLoaded', () => {
    carregarEmpresa();
    const loginIcon = document.getElementById("login-icon");
    const userData = sessionStorage.getItem("userData");
    const registrardica_icon = document.getElementById("registrardica_icon");
      if (userData) {
        // Usuário está logado, altere o ícone
        loginIcon.href = "/assets/pages/configurarPerfil.html"; // Redirecionar para a página de perfil
        loginIcon.innerHTML = '<i class="fa-solid fa-user"></i>'; // Ícone de usuário
        registrardica_icon.style.display = "block";
      }
  });
  
    
  function carregarEmpresa() {
    fetch('https://flask-ecoturismo-humbertosamora.replit.app/empresas')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro na requisição: ' + response.status);
        }
        return response.json();
      })
      .then(data => {
        console.log('Dados carregados:', data);

        const boxempresa = document.querySelector('#boxempresas');
        if (!boxempresa) {
          console.error("Elemento '#boxempresa' não foi encontrado");
          return;
        }
        boxempresa.innerHTML = '';
  
        data.forEach(empresa => {
          const divEmpresa = document.createElement('div');
                divEmpresa.classList.add('empresa', 'card', 'mb-3', 'p-3');
          const divImagem = document.createElement('div');
          divImagem.classList.add('empresa-imagem');
          if (empresa.imagem) {
              const imagem = document.createElement('img');
              imagem.src = `data:image/png;base64,${empresa.imagem}`;
              imagem.alt = `Logo da empresa ${empresa.nome}`;
              divImagem.appendChild(imagem);
          } else {
              divImagem.textContent = 'Imagem não disponível';
          }

          divEmpresa.appendChild(divImagem); 
          const divConteudo = document.createElement('div');
          divConteudo.classList.add('empresa-conteudo');

          const nome = document.createElement('h3');
          nome.textContent = `${empresa.nome}`;
          divConteudo.appendChild(nome);

          const cnpj = document.createElement('p');
          cnpj.textContent = `CNPJ: ${empresa.cnpj}`;
          divConteudo.appendChild(cnpj);

          const email = document.createElement('p');
          email.innerHTML = `<strong>Email:</strong> <a href="mailto:${empresa.email}">${empresa.email}</a>`;
          divConteudo.appendChild(email);

          const site = document.createElement('p');
          site.innerHTML = `<strong>Site:</strong> <a href="${empresa.site}" target="_blank">${empresa.site}</a>`;
          divConteudo.appendChild(site);

          const redesSociais = document.createElement('div');
          redesSociais.innerHTML = `
              <strong>Redes Sociais:</strong>
              <p>
                  ${empresa.facebook ? `<a href="${empresa.facebook}" target="_blank">Facebook</a> | ` : ''}
                  ${empresa.instagram ? `<a href="${empresa.instagram}" target="_blank">Instagram</a> | ` : ''}
                  ${empresa.tiktok ? `<a href="${empresa.tiktok}" target="_blank">TikTok</a> | ` : ''}
                  ${empresa.youtube ? `<a href="${empresa.youtube}" target="_blank">YouTube</a>` : ''}
              </p>`;
          divConteudo.appendChild(redesSociais);

          divEmpresa.appendChild(divConteudo);

          boxempresa.appendChild(divEmpresa);
        });
      })
      .catch(error => {
        console.error('Erro ao carregar emrpesas:', error);
  
        const boxempresa = document.querySelector('#boxempresa');
        if (boxempresa) {
          boxempresa.innerHTML = `
            <div class="empresa">
              <p class="text-danger">Não foi possível carregar as dicas no momento. Por favor, tente novamente mais tarde.</p>
            </div>
          `;
        }
      });
  }
  
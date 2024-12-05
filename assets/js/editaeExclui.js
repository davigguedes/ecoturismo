document.addEventListener("DOMContentLoaded", () => {
  const userData = JSON.parse(sessionStorage.getItem("userData"));

  if (userData) {
      document.getElementById("nome").value = userData.nome || "";
      document.getElementById("nick").value = userData.nick || "";
      document.getElementById("email").value = userData.email || "";
  }
});

// Função para editarr usuario

form = document.getElementById("form-usuario-editar")
let button = document.querySelector(".salvar_button")
  if (form) {
    let usuario = sessionStorage.getItem("userData");

    if (!usuario) {
      window.location.href = "/index.html";
      throw new Error('Usuário não encontrado!')
      
    }
    document.getElementById("nome").value = usuario.nome
    document.getElementById("nick").value = usuario.nick
    document.getElementById("email").value = usuario.email
    document.getElementById("senha_antiga").value = usuario.senha_antiga
    document.getElementById("senha_nova").value = usuario.senha_nova
    document.getElementById("senha_confirmacao").value = usuario.senha_confirmacao




    button.addEventListener("click", event => {
      event.preventDefault();

      // Os parâmetros são do tipo formulário
      let formData = new FormData()
      formData.append("nome", document.getElementById("nome").value);
      formData.append("nick", document.getElementById("nick").value);
      formData.append("email", document.getElementById("email").value);
      formData.append("senha_antiga", document.getElementById("senha_antiga").value);
      formData.append("senha_nova", document.getElementById("senha_nova").value);
      formData.append("senha_confirmacao", document.getElementById("senha_confirmacao").value);

      fetch(`https://flask-ecoturismo-humbertosamora.replit.app/usuario/${usuario.id}`, { method: 'PUT', body: formData,
      credentials: 'include'
       })
        .then(response => {
          if (!response.ok) {
            console.log('Erro na requisição: ' + response.status)
          }
        })
        .then(data => {
          // Salvar no sessionStorage porque quando muda de página html as variáveis globais são apagadas
          alert("Dados alterados com sucesso!");
          sessionStorage.setItem("userData", data);
          window.location.href = "/assets/pages/telaLogada.html"
        })
        .catch(error => {
          alert("Error!");
          console.error('Erro ao editar dados do usuário: ', error);
        })
    })
  }
  let button_sair = document.querySelector(".sair_button")
  button_sair.addEventListener("click", () => {

    sessionStorage.removeItem("userData");

    window.location.href = "/index.html";

  });
  let button_inicio = document.querySelector(".voltar_button")
  button_inicio.addEventListener("click", () => {

    window.location.href = "/index.html";

  });
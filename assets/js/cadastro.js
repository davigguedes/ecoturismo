form = document.getElementById("form-usuario-criar")
  if (form) {
    
    
    form.addEventListener("submit", event => {
      event.preventDefault();

      // Os parâmetros são do tipo formulário
      let formData = new FormData()
      formData.append("nome", document.getElementById("nome").value);
      formData.append("nick", document.getElementById("nick").value);
      formData.append("email", document.getElementById("email").value);
      formData.append("senha", document.getElementById("senha").value);
      formData.append("senha_confirmacao", document.getElementById("senha_confirmacao").value);

      fetch("https://flask-ecoturismo-humbertosamora.replit.app/usuarios", { method: "POST", body: formData,credentials:"include" })
        .then(response => {
          if (!response.ok) {
            console.log('Erro na requisição: ' + response.status)
          }
        })
        .then(data => {
console.log("Deu certo!")
alert("usuario Cadastrado");
          //sessionStorage.setItem("usuarioLogado", data);
          window.location.href = "/index.html"
        })
        .catch(error => {
          console.error('Erro ao criar usário: ', error);
        })
    })
  }
  let button_inicio = document.querySelector(".voltar_button")
  button_inicio.addEventListener("click", () => {

    window.location.href = "/index.html";

  });
  let button_voltarlogin = document.querySelector(".voltarlogin_button")
  button_voltarlogin.addEventListener("click", () => {

    window.location.href = "../pages/login.html";

  });
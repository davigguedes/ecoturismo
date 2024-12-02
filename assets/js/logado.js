function toggleDropdown() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('show');
  }

  // Fecha o dropdown ao clicar fora
  window.addEventListener('click', function(e) {
    const dropdown = document.querySelector('.dropdown');
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('show');
    }
  });
   // Recupera os itens do sessionStorage
  const username = sessionStorage.getItem("userData");
  if(username)
  {
    let dados = JSON.parse(username);
    document.getElementById("user-info").textContent = `Seja bem vindo: ${dados.nome}`;
    document.getElementById("user-id").textContent = `Usuario Id: ${dados.id}`;
  }
  else
  {
    document.getElementById("user-info").textContent = `Nenhum usuario encontrado`;
  }
  

  // Modal Criar Dica
  const criarButton = document.getElementById("criar");
const modal = document.getElementById("modal");
const fechaModal = document.querySelector(".close");

// Verifica se o botão existe antes de adicionar eventos
if (criarButton) {
  criarButton.addEventListener("click", () => {
      modal.style.display = "flex"; // Usa "flex" para o modal
  });
}

if (fechaModal) {
  fechaModal.addEventListener("click", () => {
      modal.style.display = "none";
  });
}

window.addEventListener("click", (event) => {
  if (event.target === modal) {
      modal.style.display = "none";
  }
});

// Cadastrar dica
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-dicas-criar");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const usuario = sessionStorage.getItem("userData");
      if (!usuario) {
        alert("Para editar dicas, é necessário estar logado!");
        return;
      }

      const formData = new FormData();
      const usuarioId = JSON.parse(usuario).id;

      // Adicionando os dados ao FormData
      formData.append("user-id", usuarioId);
      formData.append("titulo", document.getElementById("titulo").value);
      formData.append("descricao", document.getElementById("descricao").value);
      formData.append("link", document.getElementById("link").value);
      formData.append(
        "flag_alimentacao",
        document.getElementById("flag_alimentacao").checked
      );
      formData.append(
        "flag_cachoeira",
        document.getElementById("flag_cachoeira").checked
      );
      formData.append(
        "flag_camping",
        document.getElementById("flag_camping").checked
      );
      formData.append(
        "flag_montanha",
        document.getElementById("flag_montanha").checked
      );
      formData.append(
        "flag_praia",
        document.getElementById("flag_praia").checked
      );
      formData.append(
        "flag_vestuario",
        document.getElementById("flag_vestuario").checked
      );

      fetch("https://flask-ecoturismo-humbertosamora.replit.app/dicas", {
        method: "POST",
        body: formData,
        credentials: 'include'
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Erro na requisição: " + response.status);
          }
          return response.json();
        })
        .then(() => {
          alert("Dica cadastrada com sucesso!");
          window.location.href = "/index.html";
        })
        .catch((error) => {
          console.error("Erro ao criar dica: ", error);
          alert("Erro ao cadastrar a dica. Tente novamente.");
        });
    });
  }
});

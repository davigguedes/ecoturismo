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


const username = sessionStorage.getItem("userData");
const apiBaseUrl = "https://flask-ecoturismo-humbertosamora.replit.app/dicas";
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
 

document.getElementById("form-dicas-remover").addEventListener("submit", async (event) => {
    event.preventDefault();

    const nomeDica = document.getElementById("nome_dica").value.trim();
    
    if (!nomeDica) {
        alert("Por favor, insira o título da dica.");
        return;
    }

    try {
        const response = await fetch(apiBaseUrl);
        if (!response.ok) {
            throw new Error("Erro ao buscar dicas.");
        }
        const dicas = await response.json();

        const dica = dicas.find((d) => d.titulo === nomeDica);
        console.log("Dica encontrada:", dica);
        if (!dica) {
            alert("Dica não encontrada.");
            return;
        }

        // Remover a dica usando o ID
        const deleteResponse = await fetch(`${apiBaseUrl}/${dica.id}`, {
            method: "DELETE",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!deleteResponse.ok) {
            throw new Error("Erro ao remover a dica.");
        }

        alert("Dica removida com sucesso!");
    } catch (error) {
        console.error(error);
        alert("Ocorreu um erro ao tentar remover a dica.");
    }
});

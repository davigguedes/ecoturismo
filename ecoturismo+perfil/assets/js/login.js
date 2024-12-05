document.getElementById('loginform').addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();

    if (!email || !senha) {
        alert('Digite um email e senha!');
        return;
    }

    let formData = new FormData();
    formData.append("email", email);
    formData.append("senha", senha);

    try {
        //const response= await fetch('/ecoturismo/ecoturismo/assets/json/testelogin.json')
        //const response= await fetch('/ecoturismo/ecoturismo/assets/json/testelogin.json',{
        const response = await fetch('https://flask-ecoturismo-humbertosamora.replit.app/login', {
            method: 'POST',
            // headers:{ 'Content-Type': 'application/json'},
            body: formData,
            credentials: 'include'
            // body: JSON.stringify({email, senha})
        });

        const result = await response.json();

        if (response.ok) {
            sessionStorage.setItem('userData', JSON.stringify(result));
            alert('Login Realizado com sucesso.');
            window.location.href = '/assets/pages/telaLogada.html';
        } else {
            alert(result.message || 'Email ou senha inválidos, tente novamente');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Erro ao fazer login, tente novamente');
    }
    });
let button_inicio = document.querySelector(".voltar_button");
button_inicio.addEventListener("click", () => {

window.location.href = "../../index.html";

});
let button_criar = document.querySelector(".criar_button");
button_criar.addEventListener("click", () => {

window.location.href = "../pages/cadastro.html";

});
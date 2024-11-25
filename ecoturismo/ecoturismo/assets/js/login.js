// Login
document.getElementById('loginButton').addEventListener('click', fazerLogin);

async function fazerLogin() {
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    try {
        const response = await fetch('#');
        if (!response.ok) {
            throw new Error('Erro ao carregar o arquivo JSON');
        }
        const credenciais = await response.json();

        var loginValido = false;
        var isAdmin = false;
        for (var i = 0; i < credenciais.length; i++) {
            if (credenciais[i].email === email && credenciais[i].senha === senha) {
                loginValido = true;
                isAdmin = credenciais[i].isAdmin || false;
                break;
            }
        }

        if (loginValido) {
            if (email === 'administrador@adm.com' && senha === 'Admin123') {
                window.location.href = '#';
            } 
        } else {
            alert('Email ou senha incorretos. Por favor, tente novamente.');
        }
    } catch (error) {
        console.error('Erro:', error);
        alert('Ocorreu um erro ao tentar fazer login. Por favor, tente novamente mais tarde.');
    }
}


// Esqueceu Senha


// Cadastrar

document.getElementById('criar').addEventListener('click', cadastrar);
async function cadastrar() {
    
    
}
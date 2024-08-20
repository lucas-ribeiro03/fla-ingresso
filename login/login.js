function abrirLogin(){
    const login = document.getElementById('md-login');
    document.body.style.overflow = ('hidden');
    login.classList.add('active');

    login.addEventListener('click', (evt) =>{
        if (evt.target.id == 'fechar' || evt.target.id == 'md-login'){
            login.classList.remove('active');
            document.body.style.overflow = '';
            
        }
    })
}

function abrirCadastro(){
    const cadastro = document.getElementById('md-cadastro');
    const login = document.getElementById('md-login');
    document.body.style.overflow = ('hidden');
    login.classList.remove('active');
    cadastro.classList.add('active');



    cadastro.addEventListener('click', (evt) => {
        cadastro.classList.remove('active');
    })
}

document.getElementById('login-form').addEventListener('submit', function(evt){
    evt.preventDefault();

    const email = document.getElementById('email-login').value;
    const senha = document.getElementById('senha-login').value;

    const storedUser = localStorage.getItem(email);

    if(!storedUser){
        alert('Email não cadastrado.');
    } else {
        const user = JSON.parse(storedUser);
        if(user.senha === senha){
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('loggedInUser', email);
            alert('Login realizado com sucesso!');
            window.location.href = '../index.html';  // Redirecionamento
        } else {
            alert('Senha ou usuário incorreto');
        }
    }
});

window.onload = function(){
    if(localStorage.getItem('isLoggedIn') === 'true'){
        document.getElementById('login-link').innerText = 'Lucas Ribeiro';
        document.getElementById('login-link').href = 'minha-conta.html';
    }
};  // Fechamento correto da função window.onload
function abrirLogin(){
    const cadastro = document.getElementById('md-cadastro');
    const login = document.getElementById('md-login');
    const btncadastro = document.getElementById('md-cadastro-btn');
    var esc = 27;
    document.body.style.overflow = 'hidden';
    login.classList.add('active');

    document.addEventListener('keydown', function(e) {
        if (e.key === "Escape") {
            login.classList.remove('active');
            cadastro.classList.remove('active')
        }
    });
    

    login.addEventListener('click', (evt) => {
        if (evt.target.id == 'fechar-login' || evt.target.id == 'md-login'){
            login.classList.remove('active');
            document.body.style.overflow = '';
        } else if (evt.target == btncadastro){
            cadastro.classList.add('active');
            login.classList.remove('active');
            document.body.style.overflow = ('hidden');
        }
    });

    cadastro.addEventListener('click', (evet) => {
        if(evet.target.id == 'fechar-cad' || evet.target.id == 'md-cadastro'){
            cadastro.classList.remove('active');
            login.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
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
};
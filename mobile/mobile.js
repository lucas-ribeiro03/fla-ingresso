var brasileirao = document.getElementById('brasileirao');
var libertadores = document.getElementById('libertadores');
var cdb = document.getElementById('cdb');
var maracanapc = document.getElementById('maracanapc');
var museu = document.getElementById('museu-fla');
var logo = document.getElementById('logo');
var ajuda = document.getElementById('ajuda-fla');
var menu = document.getElementById('menu-txt')
function screenSize(){
    if(window.innerWidth <= 626){
        brasileirao.src = 'img/brasileirao-mobile.png';
        libertadores.src = 'img/libertadores-mobile.png';
        cdb.src = 'img/cdb-mobile.png';
        maracanapc.src = 'img/pacotemaracana-mobile.png';
        museu.src = 'img/museufla-mobile.png';
        logo.src = '';
        ajuda.src = 'img/ajuda-flamengo-mobile.png';
        menu.innerHTML = '';
        
    }
    else{
        brasileirao.src = 'img/brasileirao.png';
        libertadores.src = 'img/libertadores.png';
        cdb.src = 'img/cdb.png';
        maracanapc.src = 'img/pacotemaracana.png';
        museu.src = 'img/museufla.png';
        logo.src = 'img/logo-fla.png';
        ajuda.src = 'img/ajuda-flamengo.png'
        menu.innerHTML = 'Menu'
    }
}

screenSize();

window.addEventListener('resize', screenSize);


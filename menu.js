function abrirMenu(){
    const menu = document.getElementById('modal-menu');
    menu.classList.add('active');

    menu.addEventListener('click', (evt) =>{
        if(evt.target.id == 'modal-menu'){
            menu.classList.remove('active');
        }
    })
}

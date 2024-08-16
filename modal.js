function abrirModal(){
    const modal = document.getElementById('md-linguas');
    document.body.style.overflow = ('hidden');
    modal.classList.add('active');

    modal.addEventListener('click', (evt) => {
        if(evt.target.id == 'fechar' || evt.target.id == 'md-linguas'){
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    })
}

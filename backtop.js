window.addEventListener('scroll', function(){
    const backtop = this.document.querySelector('.backtop');
    if(this.window.scrollY > 200){
        backtop.classList.add('active');
    } else{
        backtop.classList.remove('active');
    }
})
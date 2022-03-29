const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event){
    if(event.type == 'touchstart') event.preventDefault();
    const nav = document.getElementById('header-nav');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click',toggleMenu);
btnMobile.addEventListener('touchstart',toggleMenu);

/*---- Configuramos las Funciones para la ventana Emergente de la Empresa Flybondi*/
const openFly = document.querySelector('.fly_abrir');

const fly = document.querySelector('.fly');

const closeFly = document.querySelector('.fly_cerrar');

openFly.addEventListener('click', (e)=>{
    e.preventDefault();
    fly.classList.add("fly--show");
    
    
    
});

closeFly.addEventListener('click', (e)=>{
    e.preventDefault();
    fly.classList.remove("fly--show");
    
});
/*---- Configuramos las Funciones para la ventana Emergente de la Empresa Vigilador*/
const openVig = document.querySelector('.vig_abrir');

const vig = document.querySelector('.vig');

const closeVig = document.querySelector('.vig_cerrar');

openVig.addEventListener('click', (e)=>{
    e.preventDefault();
    vig.classList.add("vig--show");
    
});

closeVig.addEventListener('click', (e)=>{
    e.preventDefault();
    vig.classList.remove("vig--show");
    
});
/*---- Configuramos las Funciones para la ventana Emergente de la Empresa Carpinteria & Herreria*/
const openCarp = document.querySelector('.carp_abrir');

const carp = document.querySelector('.carp');

const closeCarp = document.querySelector('.carp_cerrar');

openCarp.addEventListener('click', (e)=>{
    e.preventDefault();
    carp.classList.add("carp--show");
    
});

closeCarp.addEventListener('click', (e)=>{
    e.preventDefault();
    carp.classList.remove("carp--show");
    
});
/*---- Configuramos las Funciones para la ventana Emergente de la Empresa PPP*/
const openPpp = document.querySelector('.ppp_abrir');

const ppp = document.querySelector('.ppp');

const closePpp = document.querySelector('.ppp_cerrar');

openPpp.addEventListener('click', (e)=>{
    e.preventDefault();
    ppp.classList.add("ppp--show");
    
});

closePpp.addEventListener('click', (e)=>{
    e.preventDefault();
    ppp.classList.remove("ppp--show");
    
});
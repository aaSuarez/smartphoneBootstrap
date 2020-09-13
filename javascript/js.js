
let loader = document.getElementById('loader');
let contenido = document.getElementById('contenido');


window.addEventListener('load', ()=>{

    setTimeout(carga,2000)

    function carga(){
    loader.className = 'hide';
    contenido.className='animate__backInDown';}

    
})
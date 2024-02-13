'use strict';

// Comenzamos con el menú responsive
// Cuando hago click en header__btn, toggle active al header__nav


const headerBoton = document.querySelector('.header__btn')
    console.log(headerBoton)
    

const headerNav = document.querySelector('.header__nav')
    console.log(headerNav)

    headerBoton.addEventListener('click', function(){
        headerNav.classList.toggle('active')
        
    })

   
// Crear evento de arrastrar y soltar .img en Hero
// Seleccionamos el array de elementos

// Crear animación de las secciones de la web al hacer scroll




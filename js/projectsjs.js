'use strict'

const headerBoton = document.querySelector('.header__btn')
    console.log(headerBoton)
    

const headerNav = document.querySelector('.header__nav')
    console.log(headerNav)

    headerBoton.addEventListener('click', function(){
        headerNav.classList.toggle('active')
        
    })

// Asignamos cada elemento que usaremos para crear el CARROUSEL
    
let carrouselGrande = document.querySelector('.carrousel__grande')
    // Mostramos por consola para comprobar que se están definiendo correctamente
    console.log(carrouselGrande)

let puntos = document.querySelectorAll('.carrousel__li')
    console.log(puntos)

// Recorremos cada punto con un FOREACH
puntos.forEach(function( eachPuntos, i){
    // Le agregamos un evento al hacer CLICK en cada uno de ellos
    puntos[i].addEventListener('click', function(){

        let posicion = i
        let operacion = i * (100 / puntos.length)

        
        carrouselGrande.style.transform = `translateX(${-operacion}%)`  

        // Cambio de color el punto cuando hago click en uno de ellos
        // Le REMOVE ClassList active a todos
        puntos.forEach(function(eachPuntos, i){
            puntos[i].classList.remove('active')
        })

        // Le ADD la classList active al punto señalado
        puntos[i].classList.add('active')

    })
    
})

// Cuando hago MOUSEOVER sobre un SVG, 
//     al SVG le CLASSLIST ADD isACtvie, muestra la imagen del siguiente proyecto

let svgRight = document.querySelector('.svg__right')
    console.log(svgRight)

let svgLeft = document.querySelector('.svg__left')
    console.log(svgLeft)

let imageRight = document.querySelector('.right')
console.log('imageRight')

let imageLeft = document.querySelector('.left')
console.log('imageLeft')

svgRight.addEventListener(
    'mouseover', function(){
     imageRight.classList.add('isActive')
    
    // Cuando estoy sobre el SVG tarda 2 seg en REMOVE la clase
    setTimeout(function(){
        imageRight.classList.remove('isActive')
    }, 2000)
})

svgLeft.addEventListener('mouseenter', function(){
    imageLeft.classList.add('isActive')

    setTimeout(function(){
        imageLeft.classList.remove('isActive')
    }, 2000)
})




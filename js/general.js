'use strict'

const headerBoton = document.querySelector('.header__btn')
    console.log(headerBoton)
    

const headerNav = document.querySelector('.header__nav')
    console.log(headerNav)

    headerBoton.addEventListener('click', function(){
        headerNav.classList.toggle('active')
        
    })


const lightboxBtn = document.querySelector('.lightbox__btn')
    console.log(lightboxBtn)

const mainOjo = document.querySelector('.main__ojo')
    console.log(mainOjo)

const mainLightbox = document.querySelector('.main__lightbox')

mainOjo.addEventListener('click', function(){
    mainLightbox.classList.add('isActive')
})

lightboxBtn.addEventListener('click', function(){
    mainLightbox.classList.remove('isActive')
})

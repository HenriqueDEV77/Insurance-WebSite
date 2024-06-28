let btnMenu = document.getElementById('abrir-menu')
let Menu = document.getElementById('menu')
let Overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    Menu.classList.add('open-menu')
})

menu.addEventListener('click', ()=>{
    Menu.classList.remove('open-menu')
})

Overlay.addEventListener('click', ()=>{
    Menu.classList.remove('open-menu')
})
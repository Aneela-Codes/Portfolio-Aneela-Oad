
const bars = document.getElementById('openMenu')
const close = document.getElementById('closeMenu')
const navbar = document.getElementById('navbar')

bars.addEventListener('click', ()=>{
    navbar.style.display ='block'
})
close.addEventListener('click', ()=>{
    navbar.style.display ='none'
})
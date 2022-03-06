const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

window.addEventListener("scroll", function(){
    const header = $('.header')
    header.classList.toggle('sticky', this.window.scrollY > 0)
})

window.addEventListener("click", function(){
    
})
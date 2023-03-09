//navbar 

const menuHamburger = document.querySelector(".menu-hamburger")
        const navLinks = document.querySelector(".nav-links")
 
        menuHamburger.addEventListener('click',()=>{
        navLinks.classList.toggle('mobile-menu')
        })

//scrollbar 

function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
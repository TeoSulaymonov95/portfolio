window.addEventListener('DOMContentLoaded', function
()
{
    this.window.addEventListener('scroll', function () {
        const header = document.querySelector('header');
        header.classList.toggle('sticky', this.window.scrollY > 0)
    })
    const menuBtn = document.querySelector('.menu-btn')
    const navigation = document.querySelector('.navigation')
    const navigationItems = this.document.querySelectorAll('.navigation a')  
    
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active')
        navigation.classList.toggle('active')
    })
    navigationItems.forEach(navItem => {
        navItem.addEventListener('click', () => { 
            menuBtn.classList.remove('active')
            navigation.classList.remove('active')
        })
    })
    const scrollBtn = document.querySelector('.scrollToTop-btn')
    this.window.addEventListener('scroll', () => {
        scrollBtn.classList.toggle('active', window.scrollY > 500)

    })
    scrollBtn.addEventListener('click', () => {
        document.body,scrollTop = 0;
        this.document.documentElement.scrollTop = 0;
    })

      

    window.addEventListener('scroll', () => {
     let reveals = document.querySelectorAll('.reveal')

     for(let i = 0; i< reveals.length; i++){
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 50

        if(revealTop < windowHeight - revealPoint){
            reveals[i].classList.add('active')
        }
     }
    })
}
)
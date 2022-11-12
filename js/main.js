let menuBtn = $('header .fa-bars'),
    menu = $('header ul'),
    menuItems = $('header ul li a'),
    mainSections= $('body > div'),
    thePathName = window.location.pathname;   
// toggle menu
menuBtn.click(function(){
    menu.slideToggle()
})
menuItems.click(function(){
    setTimeout(() => {
       menuItems.removeClass('active')
        $(this).addClass('active')
        if(window.innerWidth<=768){
            menu.slideUp()
        }
    }, 800);
})

function scrollInto(elements){
    let arr = Array.from(elements)
    arr.forEach(elem => {
        elem.addEventListener('click' , e =>{
            e.preventDefault()
        document.querySelector(e.target.dataset.section).scrollIntoView({behavior:'smooth'})
        })
    })
}




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

if(thePathName ==='/Top-Cut' || thePathName === '/index.html'){
    menuItems.click(function(e){
        setTimeout(() => {
            menuItems.removeClass('active')
            $(this).addClass('active')
            if(window.innerWidth<=768){
                menu.slideUp()
            }
        }, 1000);
    })
    
    $(window).scroll(function(){
        let y = window.scrollY,
            mainSectionsArr = Array.from(mainSections)
                let z = mainSectionsArr.filter(e=> $(e).offset().top <= y && ($(e).offset().top + $(e).innerHeight()) >= y + 10)
                menuItems.removeClass('active')
              $(`a[href="#${$(z[0]).attr('id')}"`).addClass('active')
    })

    scrollInto(menuItems)
}
if(thePathName === '/works.html'){
    window.scrollTo(0 , $('.our-work').offset().top)
}
if(thePathName === '/service.html'){
    window.scrollTo(0 , $('.our-services').offset().top)
}


function scrollInto(elements){
    let arr = Array.from(elements)
    arr.forEach(elem => {
        elem.addEventListener('click' , e =>{
            e.preventDefault()
        document.querySelector(e.target.dataset.section).scrollIntoView({behavior:'smooth'})
        })
    })
}




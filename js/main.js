let menuBtn = $('header .fa-bars'),
    menu = $('header ul'),
    menuItems = $('header ul li a');
// toggle menu
menuBtn.click(function(){
    menu.slideToggle()
})
if(menuBtn.css('display') !== 'none'){
    menuItems.click(function(){
    menu.fadeOut()
})
}
menuItems.click(function(){
    menuItems.removeClass('active')
    $(this).addClass('active')
})
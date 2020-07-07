(function() {
    let burger  = document.querySelector('.header_burger');
    const menu = document.querySelector('.menu_category');
    const close_menu = document.querySelector('.nav_category_close');
    burger.addEventListener('click', () => {
        menu.classList.add('header_nav_active');
    });
    close_menu.addEventListener('click', () => {
        menu.classList.remove('header_nav_active');
     });
    }());
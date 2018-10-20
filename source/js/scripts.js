var button_hamburger = document.querySelector('.page-header__hamburger');
var mobile_menu = document.querySelector('.page-header__navigation');
var header_top = document.querySelector('.page-header__top');

if ( button_hamburger ) {
  button_hamburger.addEventListener('click', function (evt) {
    evt.preventDefault();

    if ( button_hamburger.classList.contains('page-header__hamburger--open') ) {
      button_hamburger.classList.remove('page-header__hamburger--open');
    } else {
      button_hamburger.classList.add('page-header__hamburger--open');
    }

    if ( header_top.classList.contains('page-header__top--open') ) {
      header_top.classList.remove('page-header__top--open');
    } else {
      header_top.classList.add('page-header__top--open');
    }

    if ( mobile_menu.classList.contains('page-header__navigation--open') ) {
      mobile_menu.classList.remove('page-header__navigation--open');
    } else {
      mobile_menu.classList.add('page-header__navigation--open');
    }

  });
}

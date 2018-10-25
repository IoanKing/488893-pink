var button_hamburger = document.querySelector('.page-header__hamburger');
var mobile_menu = document.querySelector('.page-header__navigation');
var header_top = document.querySelector('.page-header__top');

button_hamburger.classList.remove('page-header__hamburger--open');
header_top.classList.remove('page-header__top--open');
mobile_menu.classList.remove('page-header__navigation--open');

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

var filters__toggle = document.querySelectorAll('.filters__toggle');

if ( filters__toggle ) {
  for (var i = 0; i < filters__toggle.length; i++) {
    filters__toggle[i].addEventListener('click', function (evt) {
      evt.preventDefault();

      for (var j = 0; j < filters__toggle.length; j++) {
        filters__toggle[j].classList.remove('filters__toggle--active');
        var parent = filters__toggle[j].parentElement;
        console.log(parent);
        parent.classList.remove('filters__item--active');
        parent.querySelector('.range').classList.remove('range--active');
        console.log(parent);
      }

      this.classList.add('filters__toggle--active');
      var parent = this.parentElement;
      console.log(parent);
      parent.classList.add('filters__item--active');
      parent.querySelector('.range').classList.add('range--active');
      console.log(parent);
    });
  }
}

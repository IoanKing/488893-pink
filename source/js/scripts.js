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
        parent.classList.remove('filters__item--active');
        parent.querySelector('.range').classList.remove('range--active');
      }

      this.classList.add('filters__toggle--active');
      var parent = this.parentElement;
      parent.classList.add('filters__item--active');
      parent.querySelector('.range').classList.add('range--active');
    });
  }
}

var form = document.querySelector('.form');
var inputs_required = document.querySelectorAll('.form input[required]');
var popup_overlay = document.querySelector('.popup__overlay');
var popup_send_request = document.querySelector('.popup__send-request');
var popup_failure = document.querySelector('.popup__failure');
var popup_close = document.querySelectorAll('.popup__close');

for (var i; i < inputs_required.length; i++) {
  inputs_required[i].oninvalid = function(evt) {
    evt.preventDefault();
    popup_overlay.classList.add('popup__overlay--active');
    popup_failure.classList.add('popup--active');
  }
}

if ( form ) {
  form.addEventListener("submit", function (evt) {
    evt.preventDefault();

    popup_overlay.classList.add('popup__overlay--active');
    popup_send_request.classList.add('popup--active');
  });
}

console.log(popup_close);

if (popup_close) {
  for (var i = 0; i < popup_close.length; i++) {
    popup_close[i].addEventListener("click", function (evt) {
      evt.preventDefault();

      popup_send_request.classList.remove('popup--active');
      popup_failure.classList.remove('popup--active');
      popup_overlay.classList.remove('popup__overlay--active');
    });
  }
}

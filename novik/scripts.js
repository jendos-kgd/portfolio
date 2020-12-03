'use strict'

// Change photo when use mobile
$(document).ready (
  function ChangePhoto() {
    if (window.matchMedia('(max-width: 375px)').matches) {
      $('#photo').attr('src', 'img/photo_mobile.jpg')
    } else {
      $('#photo').attr('src', 'img/photo.jpg')
    }
  }
)

// Change photo when resize browser
function resize() {
  if (window.matchMedia('(max-width: 375px)').matches) {
    $('#photo').attr('src', 'img/photo_mobile.jpg')
  } else {
    $('#photo').attr('src', 'img/photo.jpg')
  }
}
window.onresize = resize

// Dropdown for mobile nav
$(document).ready (
  function DropDown() {
    $('#dropdown_btn').click(function () {
      $('#dropdown_block').css('display', 'block');
    });
    $('#close_dropdown_btn').click(function () {
      $('#dropdown_block').css('display', 'none')
    })
  }
);

// Close dropdown by any click
jQuery(function($){
    $(document).click(function (e){ // событие клика по странице
        if (!$("#dropdown_block").is(e.target) && // если клик сделан не по элементу
            $("#dropdown_block").has(e.target).length === 0 && // если клик сделан не по вложенным элементам
            !$('#dropdown_btn').is(e.target)) {  //если клик сделан не по кнопке открытия dropdown
            $('#dropdown_block').css('display', 'none'); // скрываем блок
        }
    });
});

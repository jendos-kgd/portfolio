'use strict'

$(document).ready(function() {
  let position = 0;
  const slidesToShow = 3;
  const slidesToScroll = 1;
  const container = $('.slider-container');
  const track = $('.slider-track');
  const item = $('.slider-item');
  const btnPrev = $('#left_arrow');
  const btnNext = $('#right_arrow');
  const itemsCount = item.length;
  const itemWidth = '370';
  const movePosition = slidesToScroll * itemWidth;

  const setPosition = () => {
    track.css({
      transform: `translateX(${position}px)`
    });
  };

  const checkBtns = () => {
    if (position === 0) {
      btnPrev.css('display', 'none');
    } else {
      btnPrev.css('display', 'block');
    };

    if (position <= -(itemsCount - slidesToShow) * itemWidth) {
      btnNext.css('display', 'none');
    } else {
      btnNext.css('display', 'block');
    }
  };

  checkBtns();

  btnNext.click(function() {
    position -= movePosition;
    setPosition();
    checkBtns();
  });

  btnPrev.click(function() {
    position += movePosition;
    setPosition();
    checkBtns();
  });

  // Mini-menu

  $('#menu_btn').click(function () {
    if ($('#mini_nav_container').css('display') == 'none') {
      $('#mini_nav_container').css('display', 'block');
      $("#menu_btn").attr('src', 'img/icon_close.png');
    } else {
      $('#mini_nav_container').css('display', 'none');
      $("#menu_btn").attr('src', 'img/icon_menu.png');
    }
  });
});

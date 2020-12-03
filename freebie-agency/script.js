'use strict';

$(document).ready(
  function () {
    $('#first_bg').click(
      function () {
        $('header').css('background-image',  'url("img/first_bg.jpg")');
        $('#second_bg').removeClass('active');
        $('#third_bg').removeClass('active');
        $('#first_bg').addClass('active');
      }
    );

    $('#second_bg').click(
      function () {
        $('header').css('background-image',  'url("img/second_bg.jpg")');
        $('#first_bg').removeClass('active');
        $('#third_bg').removeClass('active');
        $('#second_bg').addClass('active');
      }
    );

    $('#third_bg').click(
      function () {
        $('header').css('background-image',  'url("img/third_bg.jpg")');
        $('#first_bg').removeClass('active');
        $('#second_bg').removeClass('active');
        $('#third_bg').addClass('active');
      }
    );

    $('#next').click(function () {
      nextReview();
    })

    $('#previos').click(function () {
      previosReview();
    })
  }
)

function nextReview() {
  if ($('#first_review').hasClass('visible')) {
    $('#first_review').removeClass('visible').addClass('unvisible');
    $('#second_review').removeClass('unvisible').addClass('visible');
  } else if ($('#second_review').hasClass('visible')) {
    $('#second_review').removeClass('visible').addClass('unvisible');
    $('#third_review').removeClass('unvisible').addClass('visible');
  } else if ($('#third_review').hasClass('visible')) {
    $('#third_review').removeClass('visible').addClass('unvisible');
    $('#forth_review').removeClass('unvisible').addClass('visible');
  } else if ($('#forth_review').hasClass('visible')) {
    $('#forth_review').removeClass('visible').addClass('unvisible');
    $('#first_review').removeClass('unvisible').addClass('visible');
  }
}

function previosReview() {
  if ($('#first_review').hasClass('visible')) {
    $('#first_review').removeClass('visible').addClass('unvisible');
    $('#forth_review').removeClass('unvisible').addClass('visible');
  } else if ($('#forth_review').hasClass('visible')) {
    $('#forth_review').removeClass('visible').addClass('unvisible');
    $('#third_review').removeClass('unvisible').addClass('visible');
  } else if ($('#third_review').hasClass('visible')) {
    $('#third_review').removeClass('visible').addClass('unvisible');
    $('#second_review').removeClass('unvisible').addClass('visible');
  } else if ($('#second_review').hasClass('visible')) {
    $('#second_review').removeClass('visible').addClass('unvisible');
    $('#first_review').removeClass('unvisible').addClass('visible');
  }
}

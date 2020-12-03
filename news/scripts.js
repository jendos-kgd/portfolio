$(document).ready (
  function navTurn() {
    $('#nav-btn').click(function () {
      if ($('#menu-container-mini').css('display') == 'none') {
        $('#menu-container-mini').css('display', 'block');
        $('#nav-btn').attr('src', 'img/icon-close.png');
      }
      else {
        $('#menu-container-mini').css('display', 'none');
        $('#nav-btn').attr('src', 'img/icon-nav.png');
      };
    });
  }
);

$(document).ready (
  function seacrhTurn() {
    $('#search-mini').click(function () {
      console.log($('.search').css('display'));
      if ($('.search').css('display') == 'none') {
        console.log('no-search')
        $('.search').css({
          'display': 'block',
          'position': 'absolute',
          'width': '100%',
          'margin': '5px 10px 0',
        });
      };
    });
    
  }
);

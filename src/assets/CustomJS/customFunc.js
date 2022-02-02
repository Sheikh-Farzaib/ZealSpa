$('.accordion-button').on('click', function () {
    $('.accordion-button').each(function () {
      if ($(this).attr('aria-expanded') === "true") {
        $(this).find('.featherIcon').addClass('rotation');
      }
      else {
        $('.accordion-button').each(function () {
          if ($(this).attr('aria-expanded') === "false") {
            $(this).find('.featherIcon').removeClass('rotation');
          }
        });
      }
    });
  });

  $('#navToggleButton, #closeButton, .nav-link').on('click', function () {
    $('#navMenu').toggleClass('active');
    var title = "Menu";
    if($('#navMenu').hasClass('active')){
      title = "Close Menu";
    };
    $('#navMenu').attr('title',title);
    $('#navMenu').attr('data-bs-original-title',title);
    $('#navMenu').attr('aria-label',title);

    if ($('#offcanvasNavbar').hasClass('show')) {
      $('#mainNavHidden').show();
      $('#mainContentCol').removeClass('col-xxl-12');
      $('#mainContentCol').addClass('col-xxl-10');
      const connectId = $('#navMenu');
      connectId.html(feather.icons['x'].toSvg() + 'Close');
    
    
    }
    else {
      $('#mainNavHidden').hide();
      $('#mainContentCol').removeClass('col-xxl-10');
      $('#mainContentCol').addClass('col-xxl-12');
      const connectId = $('#navMenu');
      connectId.html(feather.icons['menu'].toSvg() + 'Menu');
    }
  });
$(document).ready(() => {

  //$('#navigation').on('click', () => {
  //  $('.login-form').show();
  //});
  $('#main').on('click', () => {
    $('#navigation').css('opacity', '1');
    $('#myBtn').css('opacity', '1');
    });

    //mouse enter Home//
      $('#continent-home').on('mouseenter', () => {
        $('#continent-home').css('letter-spacing', '0.6em');
      });

    //mouse leave Home//
    $('#continent-home').on('mouseleave', () => {
      $('#continent-home').css('letter-spacing', 'initial');
    });


    //mouse enter Asia//
    $('#continent-asia, #asia-list').on('mouseenter', () => {
      $('#asia-list').fadeIn(1000);
      $('#continent-asia').css('letter-spacing', '0.6em');
    });

    //mouse leave Asia//
    $('#continent-asia, #asia-list').on('mouseleave', () => {
    $('#asia-list').fadeOut(700);
    $('#continent-asia').css('letter-spacing', 'initial');
    });


    //mouse enter America//
    $('#continent-america, #america-list').on('mouseenter', () => {
      $('#america-list').fadeIn(1000);
      $('#continent-america').css('letter-spacing', '0.6em');
    });

    //mouse leave America//
    $('#continent-america, #america-list').on('mouseleave', () => {
    $('#america-list').fadeOut(700);
    $('#continent-america').css('letter-spacing', 'initial');
    });


    //mouse enter Europe//
    $('#continent-europe, #europe-list').on('mouseenter', () => {
      $('#europe-list').fadeIn(1000);
      $('#continent-europe').css('letter-spacing', '0.6em');
    });

    //mouse leave Europe//
    $('#continent-europe, #europe-list').on('mouseleave', () => {
    $('#europe-list').fadeOut(700);
    $('#continent-europe').css('letter-spacing', 'initial');
    });

    //mouse enter save Ocean//
    $('#continent-ocean').on('mouseenter', () => {
      $('#ocean-list').fadeIn(1000);
      $('#continent-ocean').css('letter-spacing', '0.6em');
    });

    //mouse leave save Ocean//
    $('#continent-ocean').on('mouseleave', () => {
    $('#ocean-list').fadeOut(700);
    $('#continent-ocean').css('letter-spacing', 'initial');
    });



    $('#country').on('mouseenter', () => {
    $('#country').animate({
      letterSpacing: "+=0.6em"
    }, 700);
    });


    $('#country').on('mouseleave', () => {
    $('#country').animate({
      letterSpacing: "0em"
    }, 700);
    });


    $('.one').on('mouseenter', () => {
    $('.one').css('filter', 'grayscale(0)');

    });

});

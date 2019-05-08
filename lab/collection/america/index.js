$(document).ready(() => {

  //$('#navigation').on('click', () => {
  //  $('.login-form').show();
  //});

  //mouse enter Home//
    $('#continent-home').on('mouseenter', () => {
      $('#continent-home').css('letter-spacing', '0.6em');
    });

  //mouse leave Home//
  $('#continent-home').on('mouseleave', () => {
    $('#continent-home').css('letter-spacing', 'initial');
  });





//mouse enter America//
  $('#continent-asia, #asia-list').on('mouseenter', () => {
    $('#asia-list').fadeIn(1000);
    $('#continent-asia').css('letter-spacing', '0.6em');
  });

//mouse leave America//
$('#continent-asia, #asia-list').on('mouseleave', () => {
  $('#asia-list').fadeOut(700);
  $('#continent-asia').css('letter-spacing', 'initial');
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


//click #inform//
  $('#nny').on('click', () => {
    $('#nny').css('color', 'navy');
    $('#bbt').css('color', 'white');
    $('#ssf').css('color', 'white');
  });

  $('#bbt').on('click', () => {
    $('#nny').css('color', 'white');
    $('#bbt').css('color', 'navy');
    $('#ssf').css('color', 'white');
  });


  $('#ssf').on('click', () => {
      $('#nny').css('color', 'white');
      $('#bbt').css('color', 'white');
      $('#ssf').css('color', 'navy');
    });



$('.one').on('mouseenter', () => {
  $('.one').css('filter', 'grayscale(0)');

});

$('.one').on('mouseenter', () => {
  $('.one').css('filter', 'grayscale(0)');
});


$('body').ripples({
  resolution: 700,
  	dropRadius: 25,
  	perturbance: 0.5,
});





});

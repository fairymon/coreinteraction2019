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
  $('#continent-asia, #asia-lst').on('mouseenter', () => {
    $('#asia-list').fadeIn(1000);
    $('#continent-asia').css('letter-spacing', '0.6em');
  });

//mouse leave Europe//
$('#continent-asia, #asia-list').on('mouseleave', () => {
  $('#asia-list').fadeOut(700);
  $('#continent-asia').css('letter-spacing', 'initial');
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
  $('#ccroatia').on('click', () => {
    $('#ccroatia').css('color', 'navy');
    $('#uuk').css('color', 'white');
    $('#tturkey').css('color', 'white');
  });

  $('#uuk').on('click', () => {
    $('#ccroatia').css('color', 'white');
    $('#uuk').css('color', 'navy');
    $('#tturkey').css('color', 'white');
  });


  $('#tturkey').on('click', () => {
      $('#ccroatia').css('color', 'white');
      $('#uuk').css('color', 'white');
      $('#tturkey').css('color', 'navy');
    });



$('.one').on('mouseenter', () => {
  $('.one').css('filter', 'grayscale(0)');

});

$('.one').on('mouseenter', () => {
  $('.one').css('filter', 'grayscale(0)');
});


$('body').ripples({
	resolution: 500,
	dropRadius: 10,
	perturbance: 0.02,
});





});

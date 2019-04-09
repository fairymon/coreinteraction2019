$(document).ready(() => {

  //$('#navigation').on('click', () => {
  //  $('.login-form').show();
  //});

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
  $('#save-ocean, #ocean-list').on('mouseenter', () => {
    $('#ocean-list').fadeIn(1000);
    $('#save-ocean').css('letter-spacing', '0.6em');
  });

//mouse leave save Ocean//
$('#save-ocean, #ocean-list').on('mouseleave', () => {
  $('#ocean-list').fadeOut(700);
  $('#save-ocean').css('letter-spacing', 'initial');
});


});

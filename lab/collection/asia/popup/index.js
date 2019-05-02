$(document).ready(() => {

  //$('#navigation').on('click', () => {
  //  $('.login-form').show();
  //});
  $('.box').on('click', () => {
    $('.pop').toggle();
    });

    $('.box').on('doubleclick', () => {
      $('.pop').css('display', 'flex');
      });

});

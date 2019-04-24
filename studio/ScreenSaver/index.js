$(document).ready(function(){


  //get document size
  var width = $(document).width ();
  var height = $(document).height();
  var fishWidth = $(".fish").width();
  var fishHeight = $(".fish").height();

  //speed and direction of animation
  var speedX = 4;
  var speedY = 4;

  //variables to move class
  var positionLeft = 0;
  var positionTop = 0;

  //60frames per second
  function step(){
    //update css variables
    positionLeft += speedX;
    positionTop += speedY;

    //change speed and direction variable if the ball hits the edge of the screen
    if( positionLeft > width) {
      speedX = speedX * -1;
    }
    if( positionLeft < 0){
      speedX = speedX * -1;
    }
    if (positionTop > height){
      positionTop = 0;

    }
    if (positionTop < 0 ){
      speedY = speedY * -1;
    }

    //edit class
    $('.fish').css("left", positionLeft)
    $('.fish').css("top", positionTop)

    window.requestAnimationFrame(step);
}
    window.requestAnimationFrame(step);
//end document ready function





setInterval(function(){
  //create random number
  var randomWidth = Math.random() * width - fishWidth;
  var randomHeight = Math.random() * height - fishHeight;

  //make it css ready
  var leftCss = Math.floor(randomWidth) + "px"
  var topCss = Math.floor(randomHeight) + "px"

//new fish
  $(".fish").last().clone().appendTo("#container");


  //change the css
  $(".fish").last().css("left", leftCss)
  $(".fish").last().css("top", topCss)

  //console.log($(".fish").length)
  //$(".fish").first().remove()



},3000)






})

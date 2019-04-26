$(document).ready(function(){

//  $('#container').ripples({
//    resolution: 512,
//    	dropRadius: 20,
//    	perturbance: 0.04,
//  });



  //get document size
  var width = $(document).width ();
  var height = $(document).height();
  var fishWidth = $(".fish").width();
  var fishHeight = $(".fish").height();


  //speed and direction of animation
  var speedY = 1;

  //variables to move class
  var positionLeft = 0;
  var positionTop = 0;

//make an array of colors

///

setInterval(function(){
  //create random number
  var randomWidth = Math.random() * width - fishWidth;
  var randomHeight = Math.random() * height - fishHeight;




  //make it css ready
  var leftCss = Math.floor(randomWidth) + "px"
  var topCss = Math.floor(randomHeight) + "px"

//new fish
  $(".fish").last().clone().appendTo("body");

  //change the css
  $(".fish").last().css("left", leftCss)
  $(".fish").last().css("top", '-200px')


//random color
//pick a random color from array and replace blue


var colors = ['#f1624e',  '#fdc0cc', '#ffecda'];
var randomNumber = Math.random()*colors.length;
var randomColor = colors[Math.floor(randomNumber)];



$('#body', '.fish').last().css('background-color', randomColor);


  //console.log($(".fish").length)
  //$(".fish").first().remove()


},5000)

setInterval(function(){

  $(".fish").first().remove();
}, 8000)






})

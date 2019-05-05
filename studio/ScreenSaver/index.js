$(document).ready(function(){

 //$('#container').ripples({
//resolution: 512,
	//dropRadius: 20,
	//perturbance: 0.04,
 //});



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


var colors = [  '#ef3d37', '#fef59c', '#f27321', '#f0f3fa', '#ef3921'];
var backcolors = ['#f9a658',  '#fef59c', '#f6ada2'];
var fincolors = [ '#fef59c', '#f6ada2', '#f9a658'];
var randomNumber = Math.random()*colors.length;
var randomColor = colors[Math.floor(randomNumber)];
var randomBackColor = backcolors[Math.floor(randomNumber)];
var randomFinColor = fincolors[Math.floor(randomNumber)];



$('#body', '.fish').last().css('background-color', randomColor);
$('#back', '.fish').last().css('background-color', randomBackColor);
$('.side-left', '.fish').last().css('background-color', randomFinColor);
$('.side-right', '.fish').last().css('background-color', randomFinColor);


  //console.log($(".fish").length)
  //$(".fish").first().remove()


},1000)



setInterval(function(){
  var fishPosition = $(".fish").first().css('top');
  var noPX = parseInt(fishPosition, 10);
  if(noPX > height){
    $(".fish").first().remove();
  }
}, 100)


$(document).ready(function(){

var width = $(document).width();
var height = $(document).height();






  //create random number
  var randomWidth = Math.random() * width -100;
  var randomHeight = Math.random() * height - 200;

  var randomWidth2 = Math.random() * width - 100;
  var randomHeight2 = Math.random() * height - 200;

  //make it css ready
  var leftCss = Math.floor(randomWidth) + "px";
  var topCss = Math.floor(randomHeight) + "px";

  var leftCss2 = Math.floor(randomWidth2) + "px";
  var topCss2 = Math.floor(randomHeight2) + "px";

  //change the css
  $("#lily1").css("left", leftCss)
  $("#lily1").css("top", topCss)

  $("#lily2").css("left", leftCss2 )
  $("#lily2").css("top", topCss2)
})




})

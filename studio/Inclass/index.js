$(document).ready(function(){

var width = $(document).width();
var height = $(document).height();
var circleWidth = $("#circle").width();


var colors = ["red", "blue", "pink", "green", "black", "purple"];
var content = ["you", "I", "we", "he", "she", "they"];
var family = ["Monotype", "Sans-Serif", "Serif", "Cursive"];


setInterval(function(){


  //create random number
  var randomWidth = Math.random() * width;
  var randomHeight = Math.random() * height;

  var randomSize = Math.random() * 500;

  var randomNumber = Math.random()*colors.length;
  var randomColor = colors[Math.floor(randomNumber)];

  var randomNumbers = Math.random()*content.length;
  var randomContent = content[Math.floor(randomNumbers)];

  var randomStyle = Math.random()*family.length;
  var randomFamily = family[Math.floor(randomStyle)];


  //make it css ready
  var leftCss = Math.floor(randomWidth) + "px"
  var topCss = Math.floor(randomHeight) + "px"

  //change the css
  $(".you").css("left", leftCss)

  $(".you").css("font-size", randomSize)
  $(".you").css("color", randomColor)
  $(".you").text(randomContent)
  $(".you").css("font-family", randomFamily)
  $(".you").css("left", leftCss)

  $(".you").css("font-size", randomSize)
  $(".you").css("color", randomColor)
  $(".you").text(randomContent)
  $(".you").css("font-family", randomFamily)
  $(".you").css("left", leftCss)

  $(".you").css("font-size", randomSize)
  $(".you").css("color", randomColor)
  $(".you").text(randomContent)
  $(".you").css("font-family", randomFamily)
  $(".you").css("left", leftCss)

  $(".you").css("font-size", randomSize)
  $(".you").css("color", randomColor)
  $(".you").text(randomContent)
  $(".you").css("font-family", randomFamily)


},1000)

})

//end document ready function

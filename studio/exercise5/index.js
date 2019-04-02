//check if document is ready
$(document).ready(function(){

    var width = $(document).width() - 300;
    var height = $(document).height() - 300;
    var colors = ["orange", "pink", "green", "blue", "brown"]
    var words = ['LIVELY','DILIGENT','FRIENDLY','CHEERY', 'ENJOY', 'LIKE', ]

//random color and position every 2 second
    setInterval(function(){
    var positionLeft = Math.random() * width + "px";

    var positionTop = Math.random() * height + "px";
    var randomNumber = Math.random()*colors.length;
    var randomColor = colors[Math.floor(randomNumber)];

    $('.circle').css("left", positionLeft)

    $('.circle').css("background-color", randomColor)



    var wordsChange = words[Math.floor(randomNumber)];
    $( ".text" ).html( wordsChange );

    var degree = Math.random() * height ;
    $('.circle').css({transform: 'rotate(' + degree + 'deg)' })

    var size = Math.random() * width * 0.5 ;
    $('.circle').css("width", size)

    var border = Math.random() * width *0.5;
    $('.circle').css("border-radius", border)

  },2500)



//end document ready function
})

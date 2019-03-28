1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
//check if document is ready
$(document).ready(function(){

    //Declare some stuff
    var name = "Hyunji Jo";
    var time = new Date();
    var ticker = 0;
    var ticker2 = 0;

    var colors = [

      '#994455', '#ffccdd', '#dd99bb', '#ddccee', '#ddedcc', ' #ccdded', '#88bbdd', '#ffbbbb', '#dd9988',
    '#994455', '#ffccdd', '#dd99bb', '#ddccee', '#ddedcc', ' #ccdded', '#88bbdd', '#ffbbbb', '#dd9988',
  '#994455', '#ffccdd', '#dd99bb', '#ddccee', '#ddedcc', ' #ccdded', '#88bbdd', '#ffbbbb', '#dd9988',
'#994455', '#ffccdd', '#dd99bb', '#ddccee', '#ddedcc', ' #ccdded', '#88bbdd', '#ffbbbb', '#dd9988',
'#994455', '#ffccdd', '#dd99bb', '#ddccee', '#ddedcc', ' #ccdded', '#88bbdd', '#ffbbbb', '#dd9988',    ]

    //Change some html
    $("#name").text(name)
    $("#time").text(time)
    $("#ticker").text(ticker)



    //Change some css
    $("p").css("font-size", "22px")
    $("p").css("color", "grey")

    //Create your own function
    function getTime() {
        time = new Date();
        //change html
        $("#time").text("Date: " + time)
        $("#ticker").text('    ' + "Ticker: " + ticker)
        $("#ticker2").text("Ticker 2: " + ticker2)
        $("#clock-shadow").text( + ticker2 + "/35 ")

        //change css
        var rotate = "rotate(" + ticker + "deg)";
        var scale = "scale(" + ticker + "deg)";

        console.log(rotate);
        $("#clock-box").css("transform", rotate)
        $("#clock").css("background-color", colors[ticker2])
        $("#clock-shadow").css("color", colors[ticker2])
        $("#clock-shadow").css("font-size", "36px")
        $("#clock-shadow").css("text-align", "center")





        //update variables
        ticker+=10;
        ticker2+=1;


        //check if ticker2 is over 4
        if(ticker2 >= 36){
            ticker2 =0;
        }


    //end function
    }

    //call function initially
    getTime()

    //call function every second
    setInterval(function(){
      getTime()
    },1000)


//end document ready function
})

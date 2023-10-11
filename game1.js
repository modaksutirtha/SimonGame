var gamepattern = [];
var buttoncolors = ["red", "blue", "green", "yellow"];
var userpattern = [];
var level = 0;
var started = false;
$(document).keypress(function () {

    if (!started) {
        console.log("hello");
        $("#level-title").text("Level " + level);
        nextsequence();
        started=true;
    }

});
$(".btn").click(function () {
    var choosencolor = ($(this).attr("id"));
    userpattern.push(choosencolor);
    // console.log(userpattern);
    playsound(choosencolor);
    addpress(choosencolor);
    checkanswer(userpattern.length - 1);
});
function checkanswer(currentlevel) {
    if (gamepattern[currentlevel] === userpattern[currentlevel]) {
        console.log("good");

        if (userpattern.length === gamepattern.length) {
            setTimeout(function () {
                nextsequence();
            }, 1000);
        }
    }
    else {
        console.log("bad");
        playsound("wrong");
        $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);
      $("#level-title").text("Game Over, Press Any Key to Restart");
      startover();
    }

    
}
function nextsequence() {
    userpattern = [];
    level++;
    $("#level-title").text("Level " + level);
    var randomnumber = Math.floor(Math.random() * 4);
    gamepattern.push(buttoncolors[randomnumber]);
    var randomChosenColour = buttoncolors[randomnumber];
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    var audio = new Audio("sounds_" + randomChosenColour + ".mp3");
    audio.play();
    // addpress(randomChosenColour) ;
    // console.log(newly);
    // console.log(userpattern);
    // var level=0;
    
    // return randomnumber;
}
function playsound(col) {
    var audio = new Audio("sounds_" + col + ".mp3");
    audio.play();
}
function addpress(colu) {
    document.querySelector("." + colu).classList.add("pressed");
    setTimeout(function () {
        document.querySelector("." + colu).classList.remove("pressed");
    }, 100);
}

function startover(){
    level=0;
    // userpattern=[];
    gamepattern=[];
    started=false;
}








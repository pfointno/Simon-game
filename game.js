// alert("Working!!!!");
// $("h1);

//Array filled with colors
var buttonColors = ["red", "blue", "green", "yellow"];
//Empty array of the random sequence made!
var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;


$(document).keypress(function() {
    if (!started) {
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
  });

// Creating a handler function for all the buttons that do this
//when they are clicked
// $(".btn").click(function() {
// //Sets the userChosenColor to the id of the button clicked
// var userChosenColor = $(this).attr("id");
// userClickedPattern.push(userChosenColor);
// playSound(userChosenColor);
// animatePress(userChosenColor);
// // console.log(userClickedPattern);
// checkAnswer(userClickedPattern.length-1);

// });

$(".btn").click(function() {

    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
  
    playSound(userChosenColour);
    animatePress(userChosenColour);
  
    checkAnswer(userClickedPattern.length-1);
  });

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}
function nextSequence() {
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);
  
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
  }
// function nextSequence() {
//     userClickedPattern = [];
//     level++;
//     $("#level-title").text("Level " + level);
//     //Creating a random number from 0-3
//     var randomNumber = Math.floor(Math.random() * 4);
//     //Setting randomChosenColor to the array value that is from
//     // based on the random number given
//     var randomChosenColor = buttonColors[randomNumber];
//     //Push the random color to the empty array for the game to
//     //show
//     gamePattern.push(randomChosenColor);
//     //Selecting a button with the same id as randomChosenColors and
//     //making it fade in and out
//     $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100);
//     //Making that specifix random colors audio play so the user knows
//     //the difference
//     // var audio = new Audio ("sounds/" + randomChosenColor + ".mp3");
//     // audio.play();
//     //This can replace b/c it does the same thing!
//     playSound(randomChosenColor);
// }
function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
  }
function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}
 
function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}

// var buttonColours = ["red", "blue", "green", "yellow"];

// var gamePattern = [];
// var userClickedPattern = [];

// var started = false;
// var level = 0;

// $(document).keypress(function() {
//   if (!started) {
//     $("#level-title").text("Level " + level);
//     nextSequence();
//     started = true;
//   }
// });

// $(".btn").click(function() {

//   var userChosenColour = $(this).attr("id");
//   userClickedPattern.push(userChosenColour);

//   playSound(userChosenColour);
//   animatePress(userChosenColour);

//   checkAnswer(userClickedPattern.length-1);
// });

// function checkAnswer(currentLevel) {

//     if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
//       if (userClickedPattern.length === gamePattern.length){
//         setTimeout(function () {
//           nextSequence();
//         }, 1000);
//       }
//     } else {
//       playSound("wrong");
//       $("body").addClass("game-over");
//       $("#level-title").text("Game Over, Press Any Key to Restart");

//       setTimeout(function () {
//         $("body").removeClass("game-over");
//       }, 200);

//       startOver();
//     }
// }


// function nextSequence() {
//   userClickedPattern = [];
//   level++;
//   $("#level-title").text("Level " + level);
//   var randomNumber = Math.floor(Math.random() * 4);
//   var randomChosenColour = buttonColours[randomNumber];
//   gamePattern.push(randomChosenColour);

//   $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
//   playSound(randomChosenColour);
// }

// function animatePress(currentColor) {
//   $("#" + currentColor).addClass("pressed");
//   setTimeout(function () {
//     $("#" + currentColor).removeClass("pressed");
//   }, 100);
// }

// function playSound(name) {
//   var audio = new Audio("sounds/" + name + ".mp3");
//   audio.play();
// }

// function startOver() {
//   level = 0;
//   gamePattern = [];
//   started = false;
// }

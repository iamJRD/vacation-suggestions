$(document).ready(function() {
  $("#blanks form").submit(function(event){
    var answers = ["plan", "sleep", "food", "drinks", "distance"];
    var userAnswer = 0;

    answers.forEach(function(answer) {
      userAnswer += parseInt($("select#" + answer).val());
    });

    if (userAnswer <= 8 && userAnswer >=5) {
      $("#resultsJumbo").show();
      $("#resultsJumbo").addClass("hawaiiBG")
      $("#hawaii").fadeIn(1500);
      $(".introQuest").hide();
    }
    else if (userAnswer >= 12) {
      $("#resultsJumbo").show();
      $("#resultsJumbo").addClass("newYorkBG")
      $("#newYork").fadeIn(1500);
      $(".introQuest").hide();
    }
    else if (userAnswer >= 9 && userAnswer <= 11){
      $("#resultsJumbo").show();
      $("#resultsJumbo").addClass("yellowStoneBG")
      $("#yellowStone").fadeIn(1500);
      $(".introQuest").hide();
    }
    else {
      alert("Please answer all the questions!");
    }

    event.preventDefault();
  });
});

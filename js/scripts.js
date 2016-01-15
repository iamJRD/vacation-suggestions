$(document).ready(function() {
  $("#blanks form").submit(function(event){
    var answers = ["plan", "sleep", "food", "drinks", "distance"];
    var userAnswer = 0;

    answers.forEach(function(answer) {
      userAnswer += parseInt($("select#" + answer).val());
    });

    if (userAnswer <= 9 && userAnswer >=5) {
      $("#resultsJumbo").show();
      $("#resultsJumbo").addClass("hawaiiBG")
      $("#hawaii").show();
      $(".introQuest").hide();
    }
    else if (userAnswer >= 13) {
      $("#resultsJumbo").show();
      $("#resultsJumbo").addClass("newYorkBG")
      $("#newYork").show();
      $(".introQuest").hide();
    }
    else if (userAnswer >= 10 && userAnswer <= 12){
      $("#resultsJumbo").show();
      $("#resultsJumbo").addClass("yellowStoneBG")
      $("#yellowStone").show();
      $(".introQuest").hide();
    }
    else {
      alert("Please answer all the questions!");
    }


    event.preventDefault();
  });
});

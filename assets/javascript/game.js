// Pseudo Code
/*
   - STORE DOM ELEMENTS AS VARIABLES:
      - Score Container
        - target score div
        - user score div 

      - Crystal Container
        - crystals

      - Stats Div
        - wins div
        - losses div 

   - ARRAY OF CRYSTAL IMAGE LINKS

   - (RE)INITIALIZE GAME DATA:
      - Generate target score randomly between 19 & 120
        - display generated number in target score div

      - Set user score to 0
        -display user score in user score div

      - Empty crystal div 

      - (Re)Generate crystal divs
        - set data attribute of random value between 1 -12
        - background image of crystal (select image from array based on val to provide consistency)

   - CREATE ON CLICK FUNCTION FOR DOCUMENT.CRYSTAL ELEMENTS
      - Add value of crystal to user score

      - Check user score against target score
        - win (userScore===targetScore)
          - wins++
          - reinitialize game
        - loss (userScore>targetScore)
          - losses++
          - reinitialize game
*/
var $userScore = $("#userScore");
var $targetScore = $("#targetScore");
var $crystalContainer = $("#crystals");
var $wins = $("#wins");
var $losses = $("#losses");

var targetScore = -1;
var userScore = 0;
var wins = 0;
var losses = 0;
var imgSrcArr = [
                "assets/images/green_crystal-128.png",
                "assets/images/orange_crystal-128.png",
                "assets/images/crystal_turquoise-128.png",
                "assets/images/pink_crystal-128.png",
                "assets/images/yellow_crystal-128.png"
                ]

function initGame() {

  userScore = 0;
  $userScore.text(userScore);

  targetScore = Math.floor(Math.random() * 102) + 19;
  $targetScore.text(targetScore);

  $wins.text(wins);
  $losses.text(losses);

  $crystalContainer.empty();

  for (i = 0; i < 5; i++) {
    var crystal = $("<div>");
    var crystalVal = Math.floor(Math.random() * 12) + 1;
    crystal.attr({"class":"crystal","data": crystalVal });
    crystal.css({"background-image":"url('" + imgSrcArr[i] + "')"})
    $crystalContainer.append(crystal);
  }
}

initGame();

$(document).on("click",".crystal", function () {

  userScore += parseInt($(this).attr("data"));
  $userScore.text(userScore);

  if (userScore === targetScore) {
    wins++;
    $wins.text(wins);
    initGame();
  }
  if (userScore > targetScore) {
    losses++;
    $losses.text(losses);
    initGame();
  }

});


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




    let playerScore = 0;
    let computerScore = 0;

    // Function to generate computer's choice
    function getComputerChoice() {
      const choices = ["Rock", "Paper", "Scissors"];
      const randomIndex = Math.floor(Math.random() * choices.length);
      return choices[randomIndex];
    }

   // Function to handle the game logic
function playRound(playerSelection, computerSelection) {
  const idan = document.getElementById("idan");
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    idan.textContent = "It's a draw!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    idan.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    computerScore++;
    idan.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
  }
  updateScoreDisplay();
}

    // Function to display the score and check for a winner
    function updateScoreDisplay() {
      const scoreDisplay = document.getElementById("score-display");

      const player = document.getElementById("player");
      const computer = document.getElementById("computer");
      player.textContent=`Player: ${playerScore}`;
      computer.textContent = `Computer: ${computerScore}`;

      if (playerScore === 5) {
        scoreDisplay.textContent = " Player wins!";
        disableButtons();
        openpop();
        sGood();
      } else if (computerScore === 5) {
        scoreDisplay.textContent = " Computer wins!";
        disableButtons();
        openpop();
        sBad();
      }
    }

    // Event listener function for button click
function handleClick(event) {
  const playerSelection = event.target.id;
  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
}

// Select all the buttons and add the event listener
const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
  button.addEventListener("click", handleClick);
});

    // Function to disable the buttons
    function disableButtons() {
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
      }
    }

    function restartPage() {
      location.reload();
    }

      //for pop up
      let pop_d = document.getElementById("pop_d");

      function openpop(){
      pop_d.classList.add("open_popup");
      }
  
   //tick choice
   let good =document.getElementById("good");
   let bad =document.getElementById("bad");

   function sGood(){
    bad.classList.add("tickv")
   }

   function sBad(){
    good.classList.add("tickv")
   }
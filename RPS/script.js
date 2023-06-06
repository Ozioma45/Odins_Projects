console.log('hello world')

//for the computer choice
const arr = ["Rock","Paper","Scissors"]
function getComputerChoice(){
      var computerChoice = arr[(Math.floor(Math.random() * arr.length))]

      return computerChoice
}   

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase(); 

    if(playerSelection == computerSelection){
        return "Its a draw"
    }else if (playerSelection=="rock" && computerSelection=="scissors"){
        return "You win! Rock beats Scissors"
    }else if(playerSelection == "paper" && computerSelection == "rock"){
        return "You win! Paper beats Rock"
    }else if(
        playerSelection =="scissors" && computerSelection == "paper"
    ){
        return "You win! Scissors beats Paper"
    }else{
        return `You lose, ${computerSelection} wins`;
    }
  } 


  // Event listener function for button click
  function handleClick(event) {
    const playerSelection = event.target.textContent;
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }

  // Add event listeners to the buttons
  const buttons = document.getElementsByClassName("btn");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', handleClick);
  }

 /*  function game() {
    var rounds = 5;
    var playerScore = 0;
    var computerScore = 0;
  
    for (var i = 0; i < rounds; i++) {
      const playerSelection = prompt("Player's Choice please");
      const computerSelection = getComputerChoice();
      console.log(playRound(playerSelection, computerSelection));
  
      if (playRound(playerSelection, computerSelection).includes("win")) {
        playerScore++;
      } else if (playRound(playerSelection, computerSelection).includes("lose")) {
        computerScore++;
      }
    }
  
    console.log("Game over!");
    console.log("Player score:", playerScore);
    console.log("Computer score:", computerScore);
  }
  
  game(); */ 


  
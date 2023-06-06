console.log('hello world')

//for the computer choice
const arr = ["Rock","Paper","Scissors"]
function getComputerChoice(){
      var computerChoice = arr[(Math.floor(Math.random() * arr.length))]

      return computerChoice
}

function game(){}

function playRound(playerSelection, computerSelection, roundtime) {
    if(playerSelection == computerSelection){
        return "Its a draw"
    }else if (playerSelection=="Rock" && computerSelection=="Scissors"){
        return "You win! Rock beats Scissors"
    }else if(playerSelection == "Paper" && computerSelection == "Rock"){
        return "You win! Paper beats Rock"
    }else if(
        playerSelection ="Scissors" && computerSelection == "Paper"
    ){
        return "You win! Scissors beats Paper"
    }else{
        return `You lose, ${computerSelection} wins`;
    }
  } 


  const playerSelection = "Paper";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
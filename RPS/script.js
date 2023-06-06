console.log('hello world')

//for the computer choice
const arr = ["Rock","paper","Scissors"]
function getComputerChioce(){
      var computerChoice = arr[(Math.floor(Math.random() * arr.length))]

      return computerChoice
}

console.log(getComputerChioce())
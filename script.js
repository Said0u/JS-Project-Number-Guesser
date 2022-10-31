let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () =>{
  return Math.floor(Math.random() * 10);
}

const compareGuesses = (currentHumanGuess, computerGuess, target) =>{
  if (Math.abs(currentHumanGuess - target) < Math.abs(computerGuess - target)){
    return true;
  }else if(Math.abs(currentHumanGuess - target) === Math.abs(computerGuess - target)){
    return true;
  }
  else {
    return false; 
  }
}
const updateScore = (winnerS) =>{
  if (winnerS === 'human'){
    humanScore += 1;
  } else { computerScore +=1; }
}

const advanceRound = () =>{
  return currentRoundNumber += 1;
}

updateScore('human');
console.log(humanScore); // To confirm that this value increased by 1
updateScore('computer');
console.log(computerScore); // To confirm that this value increased by 1
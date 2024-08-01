
const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

const itemsList = ["Rock", "Paper", "Scissors"];

userKey = null;


// Initialize game variable
let completedNumberOfRounds = 0;
let computerScore = 0;
let humanScore = 0;
const TOTALROUNDS = 5;


const rockButton = document.getElementById("humans-rock");
const paperButton = document.getElementById("humans-paper");
const scissorsButton = document.getElementById("humans-scissors");
const humanWeapons = [rockButton,paperButton,scissorsButton];
const humanScoreDisplay = document.getElementById("humanscore");
const computerScoreDisplay = document.getElementById("computerscore");
const computerSelection = document.getElementById("computer-weapon"); 
const roundNumber = document.getElementById("round-number");
const refereeMessages = document.getElementById("referee-messages");
const restartButton = document.getElementById("reset-game");

rockButton.addEventListener('click', (event)=>playRound(event,0));
paperButton.addEventListener('click', (event)=>playRound(event,1));
scissorsButton.addEventListener('click', (event)=>playRound(event,2));

restartButton.addEventListener('click', initializeGame);


initializeGame();

function initializeGame()
{
    informUserToPlay();
    completedNumberOfRounds = 0;
    computerScore = 0;
    humanScore = 0;
    updateScoreMessages(humanScore,computerScore);
    updateRoundNumberMessage(completedNumberOfRounds);
}

function playRound(event, humanSelectionId)
{
    updateRefereeMessage(`You selected ${itemsList[humanSelectionId]},`);
    let computerChoiceId = getComputerChoice();
    updateComputerChoiceMessage(computerChoiceId);

    updateRefereeMessage(`You selected ${itemsList[humanSelectionId]}, 
        and the computer selected ${itemsList[computerChoiceId]}`);    

    if(humanSelectionId == computerChoiceId)
    {
        updateRefereeMessage(`Oh gosh! Its a tie`);
        return;
    }

    if(isHumanWinner(humanSelectionId,computerChoiceId))
    {
        humanScore++;
        updateRefereeMessage("You won this round");
    }
    else
    {
        computerScore++;
        updateRefereeMessage("The computer won this round");
    }
    
    updateScoreMessages(humanScore,computerScore);

    completedNumberOfRounds++;

    updateRoundNumberMessage(completedNumberOfRounds);

    
    if (completedNumberOfRounds == TOTALROUNDS)
    {
        disableAllWeapons(humanWeapons);
        declareWinner(humanScore, computerScore);
        return;
    }
    resetAllWeapons();
    //informUserToPlay();
}

function informUserToPlay()
{
    updateRefereeMessage("Select a weapon to play");
}
function updateScoreMessages(humanScore, computerScore)
{
    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;
}

function updateComputerChoiceMessage(id)
{
    computerSelection.textContent = itemsList[id];
}

function updateRefereeMessage(message)
{
    refereeMessages.textContent = message;
}

function resetAllWeapons()
{
    humanWeapons.forEach(
        (weapon)=>{
            weapon.classList.remove("selected-weapon");
        }
    );
}

function updateRoundNumberMessage(message)
{
    roundNumber.textContent = message;
}

function disableAllWeapons(weapons)
{
    weapons.forEach(
        (weapon)=>{
            weapon.disabled = true;
        }
    );
}


function isHumanWinner(humanChoice, computerChoice)
{
    if (humanChoice == SCISSORS & computerChoice == PAPER)
    {
        console.log("Your scissors shreds the computer's paper");
        return true;
    }

    if (humanChoice == SCISSORS & computerChoice == ROCK)
    {
        console.log("The computer's rock crushes your scissors");
        return false;
    }

    if (humanChoice == PAPER & computerChoice == ROCK)
    {
        console.log("Your paper eats the computer's rock");
        return true;
    }

    if (humanChoice == PAPER & computerChoice == SCISSORS)
    {
        console.log("The computer's scissors shred's your paper");
        return false;
    }

    if (humanChoice == ROCK & computerChoice == SCISSORS)
    {
        console.log("Your rock crushes the computer's scissors");
        return true;
    }

    if (humanChoice == ROCK & computerChoice == PAPER)
    {
        console.log("The computer's paper eats your rock");
        return false;
    }

}

function printScore(humanScore, computerScore, completedNumberOfRounds)
{
    document.getElementById("humanscore").textContent = humanScore;
    document.getElementById("computerscore").textContent = computerScore;
}

function showChoicesMessage(humanChoice, computerChoice)
{
    console.log("You chose: " + itemsList[humanChoice] + ", Computer chose: " + itemsList[computerChoice]);
}

function getComputerChoice()
{
    return Math.floor(Math.random() * 3);
}

function getHumanChoice()
{
    let humanChoice = prompt("Choose from Rock [0], Paper [1], Scissors [2] by typing its corresponding number");
    return humanChoice;
}

function declareWinner(humanScore, computerScore)
{
    if (humanScore > computerScore)
    {
        updateRefereeMessage("You won!")
    }

    else
    {
        updateRefereeMessage("You lost, the mightly computer has won!");
    }
}
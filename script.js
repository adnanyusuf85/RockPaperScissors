
const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

const itemsList = ["Rock", "Paper", "Scissors"];

userKey = null;

welcomeMessage = 
    "Welcome to the Rock, Paper, Scissors game!\n" +
    "You will play a game of 5 rounds against the mighty computer.\n"+
    "Ties will result in repeat rounds, and the whoever wins maximum rounds wins. " +
    "Hit the OK key when you are ready";

while (userKey == null)
{
    userKey = prompt(welcomeMessage);
}

// Initialize game variable
let completedNumberOfRounds = 0;
let computerScore = 0;
let humanScore = 0;
const TOTALROUNDS = 5;

while (completedNumberOfRounds < TOTALROUNDS)
{
    let isHumanWinner = false;
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    completedNumberOfRounds += 1;

    showChoicesMessage(humanChoice, computerChoice);

    if (humanChoice == computerChoice)
    {
        console.log("Its a tie.");
        completedNumberOfRounds -= 1;
    }
    else
    {
        isHumanWinner = playGame(humanChoice, computerChoice);

        if (isHumanWinner)
        {
            humanScore += 1;
        }
        else
        {
            computerScore += 1;
        }
    }

    printScore(humanScore, computerScore, completedNumberOfRounds);
}
declareWinner(humanScore, computerScore);

function playGame(humanChoice, computerChoice)
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
    console.log("Your Score: " + humanScore + "/" + completedNumberOfRounds + ", Computer Score: " + computerScore + "/" + completedNumberOfRounds);
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
        console.log("Congratulations you won!");
    }

    else
    {
        console.log("Unfortunately, the computer has won!");
    }
}

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


document.getElementById("humans-rock").addEventListener('click', (event)=>humanSelection(event,0));
document.getElementById("humans-paper").addEventListener('click', (event)=>humanSelection(event,1));
document.getElementById("humans-scissors").addEventListener('click', (event)=>humanSelection(event,2));


function humanSelection(event,selection)
{
    document.getElementById(event.srcElement.id).classList.add("selected-weapon");
    let humanChoice = selection;
    document.getElementById("referee-messages").textContent = "Now wait while the computer selects a weapon...";
    let computerChoice = getComputerChoice();
    document.getElementById("computer-weapon").textContent = itemsList[computerChoice];
    
}


function Initialize()
{

}
/*
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

    declareWinner(humanScore, computerScore);
*/

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
        console.log("Congratulations you won!");
    }

    else
    {
        console.log("Unfortunately, the computer has won!");
    }
}
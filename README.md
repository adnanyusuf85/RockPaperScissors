# RockPaperScissors
Rock, Paper, Scissors project for The Odin Project

# PSEUDOCODE
PROGRAM RockPaperScissors

CONSTANT Rock ← 0
CONSTANT Paper ← 1
CONSTANT Scissors ← 2

DECLARE itemsDictionary AS DICTIONARY
itemsDictionary[Rock] ← "Rock"
itemsDictionary[Paper] ← "Paper"
itemsDictionary[Scissors] ← "Scissors"

SET humanKey ← Null

WHILE humanKey != Enter DO

  SHOW "Welcome to the Rock, Paper, Scissors game!"
  SHOW "You will play a game of 5 rounds against the might computer, ties will result in repeat rounds, and the human who wins maximum rounds wins"
  SHOW "Hit the enter key when you are ready"

  INPUT humanKey

END WHILE

SET completedNumberOfRounds ← 0
SET humanscore ← 0
SET computerscore ← 0
CONST TOTALROUNDS ← 5

WHILE completedNumberOfRounds <5 DO
  SET isHumanWinner ← False 
  humanchoice ← getHumanChoice()
  computerChoice ← getComputerChoice()

  INCREMENT completedNumberOfRounds BY 1
  
  CALL ChoicesMessage(humanChoice, computerSelection)
  
  IF humanchoice == computerChoice THEN
    PRINT "Its a tie"
    DECREMENT completedNumberOfRounds BY 1
  
  ELSE
    ishumanwinner ← playGame(humanChoice AND computerSelection)
    IF isHumanWinner THEN
      INCREMENT humanscore BY 1
    ELSE
      INCREMENT computerscore BY 1
    END IF 
  END IF
  
  CALL printScore(humanScore, computerScore, completedNumberOfRounds)                

END WHILE

FUNCTION playGame(humanChoice: INT, computerSelection: INT) RETURNS BOOL
  IF humanchoice == SCISSORS AND computerChoice == PAPER THEN
    PRINT "Your scissors shreds the computer's paper"
    RETURN True
  ENDIF

  IF (humanChoice == SCISSORS AND computerChoice == ROCK THEN
    PRINT "The computer's rock crushes your scissors"
    RETURN False
  ENDIF
         
  IF humanChoice == PAPER AND computerChoice == ROCK THEN
    PRINT "Your paper eats the computer's rock"
    RETURN True
  ENDIF

  IF humanChoice == PAPER AND computerChoice == SCISSORS THEN
    PRINT "The computer's scissors shred's your paper"
    RETURN False
  ENDIF

  IF humanChoice == ROCK and computerChoice == SCISSORS THEN
    PRINT "Your rock crushes the computer's scissors"
    RETURN True
  ENDIF

  IF humanChoice == ROCK and computerChoice == PAPER THEN
    PRINT "The computer's paper eats your rock"
    RETURN False
  ENDIF

        
END FUNCTION


FUNCTION printScore(humanScore: INT, computerScore: INT, totalRounds: INT)
  PRINT "Your Score: " & humanScore & ", Computer Score: " & computerScore" 
END FUNCTION 

FUNCTION choicesMessage(humanChoice: INT, computerChoice: INT)
  PRINT "You chose: " & itemsDictionary[humanChoice] & ", Computer chose: " & itemsDictionary[computerChoice]"
END FUNCTION

FUNCTION getHumanChoice() RETURNS INT
  PRINT "Choose from Rock [0], Paper [1], Scissors [3] by typing its corresponding number
  INPUT humanChoice
  RETURN humanChoice
END FUNCTION

FUNCTION getComputerChoice() RETURNS INT
  RETURN RandomNumberBetween(1,4)
END PROGRAM

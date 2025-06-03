
let score = JSON.parse(localStorage.getItem("score")) || {
    wins: 0,
    losses: 0,
    ties: 0,
  };
  updateScoreElement();

  function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let result = "";
    
    if (playerMove === "scissors") {
      if (computerMove === "rock") {
        result = "You lose .";
      } else if (computerMove === "paper") {
        result = "You win.";
      } else if (computerMove === "scissors") {
        result = "Tie";
      }
    } else if (playerMove === "paper") {
      if (computerMove === "rock") {
        result = "You win.";
      } else if (computerMove === "paper") {
        result = "Tie.";
      } else if (computerMove === "scissors") {
        result = "You loose.";
      }
    } else if (playerMove === "rock") {
      if (computerMove === "rock") {
        result = "Tie.";
      } else if (computerMove === "paper") {
        result = "You loose.";
      } else if (computerMove === "scissors") {
        result = "You win.";
      }
    }

    if (result === "You win.") {
      score.wins += 1;
    } else if (result === "You loose.") {
      score.losses += 1;
    } else if (result === "Tie") {
      score.ties += 1;
    }

    localStorage.setItem("score", JSON.stringify(score));

    updateScoreElement();
    document.querySelector(".js-result").innerHTML = result;

    document.querySelector(".js-moves").innerHTML = `You
   <img src="rock-paper-${playerMove}-circle-11562962494dqcjusyikw (1).png"
    class="move-icon">
    <img   src="535-5351099_rock-paper-scissors-rock-${computerMove}-scissors-icons-png.png"     
     class="move-icon">Computer`
  }

  function updateScoreElement() {
    document.querySelector(  ".js-score" ).innerHTML = `Wins: ${score.wins},Losses:${score.losses}, Ties: ${score.ties}`;
  }

  function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMove = "";

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = "rock";
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = "paper";
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      computerMove = "scissors";
    }
    return computerMove;
  }
  

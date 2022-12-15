function startNewGame() {
  if (player[0].name === "" || player[1].name === "") {
    alert("Please set custom player names for both player");
    return;
  }
  gameAreaElement.style.display = "block";
  activePlayerNameElement.textContent = player[activePlayer].name;
}

function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  activePlayerNameElement.textContent = player[activePlayer].name;
}

function selectGameField(event) {
  const selectedColumn = event.target.dataset.col - 1;
  const selectedRow = event.target.dataset.row - 1;

  if (gameData[selectedRow][selectedColumn] > 0) {
    alert("Please select empty field");
    return;
  }
  event.target.textContent = player[activePlayer].symbol;
  event.target.classList.add("disabled");

  gameData[selectedRow][selectedColumn] = activePlayer + 1;
  // console.log(gameData);
  const winnerId = checkForGameOver();
  // console.log(winnerId);
  if (winnerId !== 0) {
    endGame(winnerId);
  }
  currentRound++;
  switchPlayer();
}

// function checkForGameOver() {
//   if (gameData[0][0] > 1 && gameData[0][1] === 1 && gameData[0][2] === 1) {
//     return 1;
//   }
//   if (gameData[0][0] === 2 && gameData[0][1] === 2 && gameData[0][2] === 2) {
//     return 2;
//   }
// }
// function checkForGameOver() {
//   if (
//     gameData[0][0] > 0 &&
//     gameData[0][0] === gameData[0][1] &&
//     gameData[0][1] === gameData[0][2]
//   ) {
//     return gameData[0][0];
//   }

//   if (
//     gameData[1][0] > 0 &&
//     gameData[1][0] === gameData[1][1] &&
//     gameData[1][1] === gameData[1][2]
//   ) {
//     return gameData[1][0];
//   }
//   if (
//     gameData[2][0] > 0 &&
//     gameData[2][0] === gameData[2][1] &&
//     gameData[2][1] === gameData[2][2]
//   ) {
//     return gameData[2][0];
//   }
// }
// function checkForGameOver() {
//   //For Rows
//   for (let i = 0; i < 3; i++) {
//     if (
//       gameData[i][0] > 0 &&
//       gameData[i][0] === gameData[i][1] &&
//       gameData[i][1] === gameData[i][2]
//     ) {
//       return gameData[i][0];
//     }
//   }
//   //For Columns
//   for (let i = 0; i < 3; i++) {
//     if (
//       gameData[0][i] > 0 &&
//       gameData[0][i] === gameData[0][i] &&
//       gameData[0][i] === gameData[0][i]
//     ) {
//       return gameData[0][i];
//     }
//   }
//   //Digonals
//   if (
//     gameData[0][0] > 0 &&
//     gameData[0][0] === gameData[1][1] &&
//     gameData[1][1] === gameData[2][2]
//   ) {
//     return gameData[0][0];
//   }
//   if (
//     gameData[2][0] > 0 &&
//     gameData[2][0] === gameData[1][1] &&
//     gameData[1][1] === gameData[0][2]
//   ) {
//     return gameData[2][0];
//   }

//   return 0;
// }
function checkForGameOver() {
  //Rows
  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[0][1] &&
    gameData[0][1] === gameData[0][2]
  ) {
    return gameData[0][0];
  }

  if (
    gameData[1][0] > 0 &&
    gameData[1][0] === gameData[1][1] &&
    gameData[1][1] === gameData[1][2]
  ) {
    return gameData[1][0];
  }
  if (
    gameData[2][0] > 0 &&
    gameData[2][0] === gameData[2][1] &&
    gameData[2][1] === gameData[2][2]
  ) {
    return gameData[2][0];
  }
  //For Columns
  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][0] &&
    gameData[1][0] === gameData[2][0]
  ) {
    return gameData[0][0];
  }

  if (
    gameData[0][1] > 0 &&
    gameData[0][1] === gameData[1][1] &&
    gameData[1][1] === gameData[2][1]
  ) {
    return gameData[0][1];
  }
  if (
    gameData[0][2] > 0 &&
    gameData[0][2] === gameData[1][2] &&
    gameData[1][2] === gameData[2][2]
  ) {
    return gameData[0][2];
  }
  //for diagonals

  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0];
  }
  if (
    gameData[2][0] > 0 &&
    gameData[2][0] === gameData[1][1] &&
    gameData[1][1] === gameData[0][2]
  ) {
    return gameData[2][0];
  }

  if (currentRound === 9) {
    return -1;
  }
  return 0;
}

function endGame(winnerId) {
  gameOverElement.style.display = "block";

  if (winnerId > 0) {
    const winnerName = player[winnerId - 1].name;
    gameOverElement.firstElementChild.firstElementChild.textContent =
      winnerName;
  } else {
    gameOverElement.firstElementChild.textContent = "It's a draw";
  }
}

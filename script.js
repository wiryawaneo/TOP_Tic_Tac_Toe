const Gameboard = (() => {
  let board = Array(9).fill("");

  const render = () => {
    let boardHTML = "";
    board.forEach((square, index) => {
      boardHTML += `<div class="square" id="square-${index}">${square}</div>`;
    });
    document.querySelector("#gameboard").innerHTML = boardHTML;
  };
  return { render };
})();

const createPlayer = (player, mark) => {
  return { player, mark };
};

const Game = (() => {
  let players = [];
  let currentPlayerIndex;
  let gameOver = false;
  const start = () => {
    players = [
      createPlayer("player one", "X"),
      createPlayer("player two", "O"),
    ];
    currentPlayerIndex = 0;
    gameOver = false;
    Gameboard.render();
    console.log(players)
  };
  return { start };
})();

Game.start();

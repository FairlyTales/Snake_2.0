import Fruit from './fruit.js';
import Matrix from './matrix.js';
import Snake from './snake.js';
import Utility from './random.js';

window.onload = function (e) {
  const field = document.querySelector('.fields');
  const scoreField = document.querySelector('.score');
  const restartBtn = document.getElementById('restart');
  const gameOver = document.querySelector('.game-over-container');
  const gameOverContent = document.querySelector('.game-over-content')

  // set board dimensions and cell size
  const boardDimensions = {
    x: 17,
    y: 17,
    cellSize: 40,
  };

  // snake starting position
  const snakeStartPosition = [
    [8, 9],
    [7, 9],
  ];

  // create gameboard(matrix) and snake objects
  const matrix = new Matrix(field, boardDimensions);
  const snake = new Snake(matrix, snakeStartPosition, 'right');

  // create gameboard and snake on the page
  matrix.create();
  snake.show();
  snake.initInputListener();

  // create first fruit
  new Fruit(matrix, Utility.generateFruit(matrix, snake)).show();

  // game score
  let score = 0;

  // game loop
  const gameLoop = setInterval(() => {
    if (!snake.snekDead) {
      if (snake.ateFruit) {
        score++;
        snake.ateFruit = false;

        new Fruit(matrix, Utility.generateFruit(matrix, snake)).show();
      }

      scoreField.textContent = score;
      snake.move();
    } else {
      clearInterval(gameLoop);
      gameOver.classList.remove('hidden-container');
      gameOverContent.classList.remove('hidden-content');
    }
  }, 400);

  restartBtn.addEventListener('click', e => {
    location.reload();
  });
};

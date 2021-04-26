import Matrix from './matrix.js';
import Snake from './snake.js';

window.onload = function (e) {
  let field = document.querySelector('.fields');

  // set board dimensions and cell size
  let boardDimensions = {
    x: 20,
    y: 10,
    cellSize: 40
  }

  // create gameboard(matrix) and snake objects
  let matrix = new Matrix(field, boardDimensions);
  let snake = new Snake(matrix, 5, 1, 'right');

  // create gameboard and snake on the page
  matrix.create();
  snake.show();
  snake.initInputListener();

  // game loop
  let gameLoop = setInterval(() => {
    if(!snake.snekDead) {
      snake.move(snake.direction);
    } else {
      console.log('snek is dead');
      clearInterval(gameLoop);
    }
  }, 500);

}

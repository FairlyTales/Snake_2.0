import Fruit from './fruit.js';
import Matrix from './matrix.js';
import Snake from './snake.js';
import Utility from './random.js'

window.onload = function (e) {
  let field = document.querySelector('.fields');

  // set board dimensions and cell size
  let boardDimensions = {
    x: 20,
    y: 10,
    cellSize: 40
  }

  // snake starting position
  const snakeStartPosition = [[10, 5], [9, 5]];

  // create gameboard(matrix) and snake objects
  let matrix = new Matrix(field, boardDimensions);
  let snake = new Snake(matrix, snakeStartPosition, 'right');

  // create gameboard and snake on the page
  matrix.create();
  snake.show();
  snake.initInputListener();

  // create first fruit
  (new Fruit(matrix, Utility.generateFruit(matrix, snake))).show();

  // game score
  let score = 0;

  // game loop
  let gameLoop = setInterval(() => {
    if(!snake.snekDead) {
      if(snake.ateFruit) {
        score++;
        snake.ateFruit = false;

        //todo: add walls to .fruit()
        (new Fruit(matrix, Utility.generateFruit(matrix, snake))).show();
      }

      snake.move();
    } else {
      console.log('snek is dead');
      console.log(`your score is: ${score}`);
      clearInterval(gameLoop);
      //todo: add overlay and score screen with restart button
    }
  }, 500);

}

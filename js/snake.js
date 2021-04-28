import Elem from './elem.js'

export default class Snake extends Elem {

  constructor(matrix, coords, direction) {
    super(matrix, coords);
    this.value = 'snake';
    this.direction = direction;
    this.newDirection = direction;
    this.snekDead = false;
    this.ateFruit = false;
  }

  move() {
    // update the direction to the last inputed by player
    this.direction = this.newDirection;

    // make a copy of a snake head coordinates
    let snakeHead = Array.from(this.cords[0]); // array copy, not a reference!

    // change snake head coordinates
    switch(this.direction) {
      case 'right':
        snakeHead[0]++;
        break;

      case 'left':
        snakeHead[0]--;
        break;

      case 'up':
        snakeHead[1]--;
        break;

      case 'down':
        snakeHead[1]++;
        break;
    }

    // check if the game is over
    if (this._snekDeadCheck(snakeHead)) {
      this.snekDead = true;
      return;
    }

    // remove the last cell of the snake (in the array, not on the board)
    // in order to move the whole snake forward
    let tail = this.cords.pop();
    
    // if snake ate the fruit -> extend the snake
    if (this._isAteFruit(snakeHead)) {
      this.ateFruit = true;
      this._extendSnake();
    }

    // remove last snake cell from the board
    this.matrix.setCell(tail[0], tail[1], '');

    // add snakeHead (with the updated coordinates) to the start of the
    // snake array, basically moving the head forward (in the array, not on the board)
    this.cords.unshift(snakeHead);

    // add this new head to the gameboard (displaying it)
    this.matrix.setCell(snakeHead[0], snakeHead[1], 'snake');
  }

  initInputListener() {
    window.addEventListener('keydown', (e) => {
      switch(e.key) {
        case 'w':
        case 'W':
        case 'ц':
        case 'Ц':
        case 'ArrowUp':
          if (this.direction === 'down') break;
          this.newDirection = 'up';
          break;

        case 'a':
        case 'A':
        case 'ф':
        case 'Ф':
        case 'ArrowLeft':
          if (this.direction === 'right') break;
          this.newDirection = 'left';
          break;

        case 's':
        case 'S':
        case 'ы':
        case 'Ы':
        case 'ArrowDown':
          if (this.direction === 'up') break;
          this.newDirection = 'down';
          break;

        case 'd':
        case 'D':
        case 'в':
        case 'В':
        case 'ArrowRight':
          if (this.direction === 'left') break;
          this.newDirection = 'right';
          break;
      }
    })
  }

  _snekDeadCheck(snakeHead) {
    // returns true if snake head go over the game board borders or rams into wall or itself
    return snakeHead[0] < 1 || snakeHead[0] > this.matrix.boardDimensions.x || snakeHead[1] < 1 || snakeHead[1] > this.matrix.boardDimensions.y || this.matrix.getCell(snakeHead[0], snakeHead[1]) === 'wall' || this.matrix.getCell(snakeHead[0], snakeHead[1]) === 'snake';
  }

  _isAteFruit(snakeHead) {
    return this.matrix.getCell(snakeHead[0], snakeHead[1]) === 'fruit';
  }

  _extendSnake() {
    // add last element of the snake to the end of the snake array
    // extending it by 1 element
    this.cords.push(this.cords[this.cords.length - 1]);
  }
}

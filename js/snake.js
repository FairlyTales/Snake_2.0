export default class Snake {

  constructor(matrix, x, y, direction) {
    this.matrix = matrix;
    this.x = x;
    this.y = y;
    this.direction = direction;

    this.snekDead = false;
  }
  
  show() {
    this.matrix.setCell(this.x, this.y, 'snake');
  }

  move(direction) {
    // save current snake position
    let lastCoords = {
      x: this.x,
      y: this.y
    }

    switch(direction) {
      case 'right':
        this.x++;
        break;

      case 'left':
        this.x--;
        break;

      case 'up':
        this.y--;
        break;

      case 'down':
        this.y++;
        break;
    }

    if (this._snekDeadCheck()) {
      this.snekDead = true;
      return;
    }
    
    // remove snake from current cell
    this.matrix.setCell(lastCoords.x, lastCoords.y, '');

    // "move" (assign) snake to the next cell
    this.matrix.setCell(this.x, this.y, 'snake');

    
  }

  initInputListener() {
    let lastDirection = null;

    window.addEventListener('keydown', (e) => {
      switch(e.key) {
        case 'w':
        case 'W':
        case 'ArrowUp':
          if (lastDirection === 'down') break;
          this.direction = 'up';
          lastDirection = 'up';
          break;

        case 'a':
        case 'A':
        case 'ArrowLeft':
          if (lastDirection === 'right') break;
          this.direction = 'left';
          lastDirection = 'left';
          break;

        case 's':
        case 'S':
        case 'ArrowDown':
          if (lastDirection === 'up') break;
          this.direction = 'down';
          lastDirection = 'down';
          break;

        case 'd':
        case 'D':
        case 'ArrowRight':
          if (lastDirection === 'left') break;
          this.direction = 'right';
          lastDirection = 'right';
          break;
      }
    })
  }

  _snekDeadCheck() {
    return this.x < 1 || this.x > this.matrix.boardDimensions.x || this.y < 1 || this.y > this.matrix.boardDimensions.y;
  }
}

export class Matrix {
  
  constructor(elem) {
    this.elem = elem;
  }

  // creates a game board with given parameters
  create(boardDimensions) {
    // calculate cells and board dimensions using given parameters
    const cellsTotal = boardDimensions.x * boardDimensions.y;
    const cellWidth = boardDimensions.cellSize + 'px';
    const boardWidth = boardDimensions.x * boardDimensions.cellSize + 'px';
    const boardHeight = boardDimensions.y * boardDimensions.cellSize + 'px';

    // assign widht and height to the board
    this.elem.style.width = boardWidth;
    this.elem.style.height = boardHeight;
    
    // create cells and set their dimensions
    for(let i = 0; i < cellsTotal; i++) {
      let div = document.createElement('div');
      div.style.width = cellWidth;
      div.style.height = cellWidth;
      this.elem.appendChild(div);
    }
  }

  getCell(x, y) {

  }

  setCell(x, y, val) {

  }
}
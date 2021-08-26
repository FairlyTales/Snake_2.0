export default class Matrix {

  constructor(elem, boardDimensions) {
    this.elem = elem;
    this.cells = [];
    this.boardDimensions = boardDimensions;
  }

  // creates a game board with given parameters
  create() {
    // calculate cells and board dimensions using given parameters
    const cellsTotal = this.boardDimensions.x * this.boardDimensions.y;
    const cellSize = this.boardDimensions.cellSize + 'px';
    
    // create cells and set their dimensions
    for(let i = 0; i < cellsTotal; i++) {
      let div = document.createElement('div');
      div.style.width = cellSize;
      div.style.height = cellSize;
      this.elem.appendChild(div);
      this.cells[i] = '';
    }
  }

  // return cell
  getCell(x, y) {
    let num = this._calcNum(x, y);
    return this.cells[num];
  }

  // set cell value
  setCell(x, y, val) {
    let num = this._calcNum(x, y, this.boardDimensions);
    this.cells[num] = val;
    this.elem.children[num].setAttribute('data-game', val);
  }

  // calculate cell number based on x and y coordinates
  _calcNum(x, y) {
    return ( y - 1 ) * this.boardDimensions.x  + ( x - 1 );
  }
}
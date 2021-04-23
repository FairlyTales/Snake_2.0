import { Matrix } from './matrix.js'

window.onload = function (e) {
  let field = document.querySelector('.fields');
  let matrix = new Matrix(field);

  // set board dimensions and cell size
  let boardDimensions = {
    x: 20,
    y: 13,
    cellSize: 30 }

  matrix.create(boardDimensions);
}
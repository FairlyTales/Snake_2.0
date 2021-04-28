export default class Utility {
  static generateFruit(matrix, snake, walls) {
    let position = [];

    do {
      position[0] = Math.floor(Math.random() * matrix.boardDimensions.x);
      position[1] = Math.floor(Math.random() * matrix.boardDimensions.y);
    } while (matrix.getCell(position[0], position[1]) !== '')

    return [position];
  }

  //todo: finish the wall and add it to the main.js
  static generateWall(matrix) {

  }
}

// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr=[];
  if (Array.isArray(matrix)) {
    for (let i = 0; i < matrix.length; i++) {
    arr = arr.concat( i % 2 ? matrix[i].reverse() : matrix[i]);
    }
  }
  return arr;
}

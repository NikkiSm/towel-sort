
module.exports = function towelSort (matrix) {
  let array = [];
  if (matrix === undefined || matrix === [] || matrix === null || matrix.length === 0) {
   return [];
  };
  for (let i=0; i< matrix.length; i++) {
    if (i===1 || i%2===1) {
      matrix[i] = matrix[i].reverse();
    }
      array.push((matrix[i]));
    
  }
  return array;
}

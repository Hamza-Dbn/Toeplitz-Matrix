/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    for (let i = matrix.length -1 ; i > 0; i--) {
        const First = matrix[i]
        for (let j = 0; j < matrix[i].length - 1; j++){
            if (First[j+1] !== matrix[i-1][j]) {
                return false;
            }
        }
      
    }
    return true;
    
};

function solution(arr1, arr2) {
    const matrix = Array.from(Array(arr1.length), () => Array(arr2[0].length).fill(0));
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            for (let k = 0; k < arr1[0].length; k++) {
                matrix[i][j] += (arr1[i][k]*arr2[k][j]);
            }
        }
    }
    return matrix;
}
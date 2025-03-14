let matrix1 = [
    [10, 20, 30],
    [40, 50, 60],
    [20, 50, 70]
];
let matrix2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function matrixAdd(matrix1, matrix2) {
    if (matrix1.length != matrix2.length || matrix1[0].length != matrix2[0].length) {
        return "Matrices are not the same size";
    }
    let result = [];
    for (let i = 0; i < matrix1.length; i++) {
        let row = [];
        for (let j = 0; j < matrix1[i].length; j++) {
            row.push(matrix1[i][j] + matrix2[i][j])
        }
        result.push(row);
    }
    return result;
}
console.log(matrixAdd(matrix1, matrix2))
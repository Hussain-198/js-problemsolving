function matrixAdd(matrix1,matrix2){
    if(matrix1.length != matrix2.length || matrix1[0].length!= matrix2[0].length){
        console.log("Invalid Arguments");
        return;
    }
    let result = [];
    for(let i=0;i<matrix1.length;i++){
        let row = [];
        for(let j=0;j<matrix1[i].length;j++){
            row.push(matrix1[i][j]+matrix2[i][j])
        }
        result.push(row)
    }
    result.forEach(row => console.log(row.join(' ')))
}
matrixAdd([[1, 2]],[[1, 3]])
function setUnion(arr1, arr2) {
    let unionArr = arr1;
    for (let i = 0; i < arr2.length; i++) {
        if (!unionArr.includes(arr2[i])) {
            unionArr.push(arr2[i]);
        }
    }
    console.log(unionArr)
}
setUnion([3, 1, 5, 7, 8], [5, 1, 8, 10, 11]);
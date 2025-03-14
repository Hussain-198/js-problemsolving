function intersection(arr1, arr2) {
    let newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) {
                newArr.push(arr1[i]);
            }
        }
    }
    console.log(newArr);
}
intersection([3, 1, 5, 7, 8], [5, 1, 8, 10, 11])
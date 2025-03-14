function union(arr1, arr2) {
    let result = arr1;
    for (let i = 0; i < arr2.length; i++) {
        let isDuplicate = false;
        for (j = 0; j < arr1.length; j++) {
            if (arr2[i] == arr1[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            result.push(arr2[i]);
        }
    }
    console.log(result);
}
union([3, 1, 5, 7, 8], [5, 1, 8, 10, 11])
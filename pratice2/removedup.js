function removeDup(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let found = false;
        for (let j = 0; j < newArr.length; j++) {
            if (arr[i] == newArr[j]) {
                found = true;
                break;
            }
        }
        if (!found) {
            newArr.push(arr[i])
        }
    }
    console.log(newArr);
    
}
removeDup([1,2,2,3,3,3,4,5,5])
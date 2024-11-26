function removeDuplicate(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < newArr.length; j++) {
            if (arr[i] === newArr[j]) {
                isDuplicate = true;
                break;
            }
        }
        if(!isDuplicate){
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
}
removeDuplicate([3, 4, 1, 5, 1, 9, 3]);
//high occuring num
function highOcc(arr) {
    let maxCount = 0;
    let maxNum;
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                count++
            }
            if (count > maxCount) {
                maxCount = count;
                maxNum = arr[i];
            }
        }
    }
    console.log(maxNum);

}
highOcc([5, 5, 4, 1, 1, 1, 6, 7, 8])
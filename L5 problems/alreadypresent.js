function alreadyPresent(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        alreadyPre = false;
        if (arr[i] == value) {
            alreadyPre = true;
            console.log(`${value} already present in the Array`);
            return;
        }
    }
    if (!alreadyPre) {
        arr.push(value);
        console.log(arr);
    }
}
alreadyPresent([5, 10, 3, 11, 18], 4)
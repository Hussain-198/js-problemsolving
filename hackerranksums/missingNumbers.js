// let arr = [203, 204, 205, 206, 207, 208, 203, 204, 205, 206];
// let brr = [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204];

let arr = [7, 2, 5, 3, 5, 3];
let brr = [7, 2, 5, 4, 6, 3, 5, 3]

function missingNumber(arr, brr) {
    let obj1 = {};
    let obj2 = {};
    let result = []

    for (let num of arr) {
        obj1[num] = (obj1[num] || 0) + 1;
    }
    for (let num of brr) {
        obj2[num] = (obj2[num] || 0) + 1;
    }

    for (let key in obj2) {
        if (!obj1[key] || obj1[key] < obj2[key]) {
            result.push(Number(key));
        }
    }
    console.log(result);
}
missingNumber(arr, brr);
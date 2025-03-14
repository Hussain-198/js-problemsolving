// function fourSum(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             for (let k = j + 1; k < arr.length; k++) {
//                 for (let l = k + 1; l < arr.length; l++) {
//                     if (arr[i] + arr[j] + arr[k] + arr[l] == target) {
//                         return true;
//                     }
//                 }
//             }
//         }
//     }
//     return false;
// }
console.log(fourSum([10, 20, 30, 40, 1, 2], 73));




//same sum using objects
function fourSum(arr, target) {
    let n = arr.length;
    let pairSums = {};
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            let sum = arr[i] + arr[j];
            if (!pairSums[sum]) {
                pairSums[sum] = []
            }
            pairSums[sum].push([i, j])
        }
    }
    // console.log(pairSums)
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            let sum = target - (arr[i] + arr[j]);
            if (pairSums[sum]) {
                for (let pair of pairSums[sum]) {
                    if (pair[0] != i && pair[0] != j && pair[1] != i && pair[1] != j) {
                        return true
                    }
                }
            }
        }
    }
    return false
}
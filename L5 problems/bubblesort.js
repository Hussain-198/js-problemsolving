// bubblesort
// Implement the bubblesort algorithm for an array of integers
function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1; j++) {

            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

            }
        }
    }
    console.log(arr.join(" "));
}
bubbleSort([3, 1, 0, 2, -1])
//selection sort 
function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    console.log(arr)
}
selectionSort([3, 5, 1, 2, 4])


function split(arr){
    let sorted = [arr[arr.length-1]];
    let element = arr[arr.length-1];
    for(let i=0;i<arr.length;i++){
        if(arr[i]<element){
            sorted.unshift(arr[i]);
        } else if(arr[i]>element){
            sorted.push(arr[i]);
        }
    }
    console.log(sorted);    
    
}
split([3,1,5,7,6,2,4]);
function quickSort(arr, low =0, high = arr.lenght-1){
    if(low<high){
        let pivotIndex = partition(arr, low, high);
        quickSort(arr,low,pivotIndex-1);
        quickSort(arr,pivotIndex+1,high)
    }
}

function partition(arr, low, high){
    let pivot = arr[high];
    let i = low-1;
    for(let j = low;j<high;j++){
        if(arr[j]<pivot){
            
        }
    }
}
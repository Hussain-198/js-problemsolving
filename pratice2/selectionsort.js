function selectionSort(arr){
    for(let i=0;i<arr.length;i++){
        let minIndex=i
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[minIndex]){
                minIndex=j
            }
        }
        console.log(arr.join(' '));
        if(minIndex!=i){
            let temp =arr[minIndex];
            arr[minIndex]=arr[i];
            arr[i]=temp;
        }
    }
}
selectionSort([64, 34, 25, 12, 22, 11,]);
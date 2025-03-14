function newElement(arr, int){
    let isPresent = false;
    for(let i=0;i<arr.length;i++){
        if(arr[i] == int){
            isPresent = true;
            console.log("Given number is already present");
            return;
        }
    }
    if(!isPresent){
        arr.push(int);
    }
    console.log(arr);
}
newElement([5, 10, 3, 11, 18],7)
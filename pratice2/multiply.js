function multiply(arr){
    let resut = 1;
    for(let i=0;i<arr.length;i++){
        if(arr[i]==0){
            break;
        } else{
            resut *= arr[i];
        }
    }
    console.log(resut);
}
multiply([2,6,8,0,1])


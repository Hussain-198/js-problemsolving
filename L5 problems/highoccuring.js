//high occuring num
function highOcc(arr) {
    let freq = {};
    let mostOcc = 0;
    let mostOccNum = null;

    for (let char of arr) {
        freq[char] = (freq[char] || 0) + 1;
    }
    

    for (let key of arr) {
        if(freq[key]>mostOcc){
            mostOcc = freq[key];
            mostOccNum=Number(key);
        }
    }
    console.log(mostOccNum)
    // let maxCount=0;
    // let maxNum=null;
    // for(let i=0;i<arr.length;i++){
    //     let count=0
    //     for(let j=0;j<arr.length;j++){
    //         if(arr[i]==arr[j]){
    //             count++
    //         }
    //     }
    //     if(count>maxCount){
    //         maxCount=count;
    //         maxNum=arr[i];
    //     }
    // }
    // console.log(maxNum)
}
highOcc([5, 5, 4, 1, 1, 1, 6, 7, 8])





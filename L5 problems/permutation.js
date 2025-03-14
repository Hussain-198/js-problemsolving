function permutation(str1,str2){
    if(str1.length!=str2.length){
        console.log(false)
        return;
    }
    let freq={}
    for(let char of  str1){
        freq[char]=(freq[char]||0)+1;
    }
    
    for(let char of str2){
        if(!freq[char]){
            console.log(false);
            return;
        }
        freq[char]--;
    }
    console.log(true)
}

permutation("man", "nam")



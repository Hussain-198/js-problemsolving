function compressedStr(input){
    if(!input || input.length==0){
        console.log("");
        return;        
    }
    let compressed="";
    let count=1;
    for(let i=1;i<input.length;i++){
        if(input[i] == input[i-1]){
            count++
        } else {
            compressed += input[i-1]+count
            count=1
        }
    }
    compressed += input[input.length-1]+count
    let output = compressed.length<input.length?compressed:input
    console.log(output);
    
}
compressedStr("aabcccccaaa")
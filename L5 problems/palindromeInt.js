function palindromeInt(x){
    let str = x.toString();
    if(x.toString().split('').reverse().join('') == str){
        return true;
    }
    else{
        return false;
    }
}
console.log(palindromeInt(23));
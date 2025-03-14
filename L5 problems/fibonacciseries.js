function fibonacci(n){
    let t1=0;
    let t2=1;
    let t3;
    if(n<=0){
        return "Invalid input"
    }
    if(n==1){
        return t1;
    }
    if(n==2){
        return t2;
    }
    if(n>2){
        for(let i=3;i<=n;i++){
            t3=t1+t2;
            t1=t2;
            t2=t3;
        }
        return t3
    }
}
console.log(fibonacci(10));

// limk - https://www.hackerrank.com/challenges/kangaroo/problem?isFullScreen=true

function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    for (let i=0;i<=10000;i++){
        if (x1+(v1*i)==x2+(v2*i)){
            return ("YES");
        }
    }
    return ("NO");

}
console.log(kangaroo(0,3,4,2));

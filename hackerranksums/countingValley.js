// link - https://www.hackerrank.com/challenges/counting-valleys/problem?isFullScreen=true

function countingValleys(steps, path) {
    // Write your code here
    let elevation = 0;
    let output = 0;
    let invalley = false;
    let pathArr = path.split('')
    for (let i = 0; i < pathArr.length; i++) {
        if (pathArr[i] == "U") {
            elevation++;
        }
        else if (pathArr[i] == "D") {
            elevation--;
        }
        if (elevation < 0 && !invalley) {
            invalley=true;   
        }
        if(elevation == 0 && invalley){
            output++
            invalley=false
        }
    }
    return output
}
console.log(countingValleys(12,"DDUUDDUDUUUD"));

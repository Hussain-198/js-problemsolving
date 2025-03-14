// link - https://www.hackerrank.com/challenges/drawing-book/problem?isFullScreen=true

function pageCount(n, p) {
    // Write your code here
    if ([0, 1].includes(p)) return 0
    if ([n - 1, n].includes(p)) {
        if (n % 2 == 0 && n - 1 == p) return 1;
        return 0;
    }
    return Math.floor(Math.min(p / 2, (n - p) / 2))
}

console.log(pageCount(5,2));

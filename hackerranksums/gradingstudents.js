// link - https://www.hackerrank.com/challenges/grading/problem?isFullScreen=true

function gradingStudents(grades) {
    // Write your code here
    let output = [];
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] >= 38) {
            let reminder = grades[i] % 5;
            if (reminder === 3) {
                output.push(grades[i] + 2)
            } else if (reminder === 4) {
                output.push(grades[i] + 1)
            } else {
                output.push(grades[i]);
            }

        } else {
            output.push(grades[i]);
        }
}
return output

}

console.log(gradingStudents());

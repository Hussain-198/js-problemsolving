
//Character count
function countChar(arr) {
    let freq = {};
    maxOcc=0;
    maxOccNum=null;
    for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1;
    }
    // console.log(freq);
    for (let key of arr) {
        if(freq[key]>maxOcc){
            maxOcc=freq[key]
            maxOccNum=key;
        }
    }
    console.log(maxOccNum);
    
}
countChar([5, 5, 4, 1, 1, 1, 6, 7, 8]);

//anagram
function anagram(str1, str2) {
    if (str1.length != str2.length) {
        console.log(false);
        return;
    }
    let freq = {};
    for (let char of str1) {
        freq[char] = (freq[char] || 0) + 1;
    }
    for (let char of str2) {
        if (!freq[char]) {
            console.log(false);
            return;
        }
        freq[char]--
    }
    console.log(true);
}
anagram("fall", "faal");

function twoSum(arr, target) {
    let freq = {};
    for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1;
    }
}
twoSum([2, 15, 11, 7], 9)




function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
    let numbers = "0123456789";
    let lower_case = "abcdefghijklmnopqrstuvwxyz"
    let upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let special_characters = "!@#$%^&*()-+"

    let count = 0;
    for (let char of password) {
        if (!numbers.includes(char)) {
            count++;
        }
        if (!lower_case.includes(char)) {
            count++;
        }
        if (!upper_case.includes(char)) {
            count++;
        }
        if(!special_characters.includes(char)){
            count++
        }
    }
    if(n<6){
        return 6 - n
    }
    return Math.max(6-count, 6-n)
}
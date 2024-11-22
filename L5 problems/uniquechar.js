function uniqueChar(str) {
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] == str[j]) {
                console.log("It does not have unique characters")
                return;
            }

        }
    }
    console.log("It has unique characters")
}
uniqueChar("aacds")
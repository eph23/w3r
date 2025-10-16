"use strict";

function camelize(str) {
    let splitted = [];
    let tempWord = "";

    for (let word of str) {
        if (word !== " ") {
            tempWord += word;
        } else {
            splitted.push(tempWord);
            tempWord = "";
        }
    }
    if (tempWord !== "") {
        splitted.push(tempWord);
    }

    let result = "";

    for (let word of splitted) {
        let transformedWord = "";

        for (let i = 0; i < word.length; i++) {
            if (i === 0) {
                // First character → uppercase
                transformedWord += word[i].toUpperCase();
            } else {
                // Remaining characters → as is
                transformedWord += word[i];
                console.log(transformedWord);
            }
        }
        // Add transformed word to the final result
        result += transformedWord;
    }

    return result;
}

console.log(camelize("JavaScript Exercises")); // "JavaScriptExercises"
console.log(camelize("JavaScript exercises")); // "JavaScriptExercises"
console.log(camelize("JavaScriptExercises")); // "JavaScriptExercises"

/* let transformed = []; let tempTrans = ""; let result = ""; for (let word of splitted) { for (let i = 0; i < word.length; i++) { if (word[0] !== word[0].toUpperCase()) { tempTrans += word[0].toUpperCase(); } } } console.log(tempTrans); return result; */

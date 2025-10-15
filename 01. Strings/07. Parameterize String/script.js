"use strict";

function string_parameterize(str) {
    let rectStr = str.trim().toLowerCase();
    let splitted = [];
    let newStr = "";

    let parameter = "";

    for (let word of rectStr) {
        if (word !== " " && word !== "." && word !== ",") {
            newStr += word;
        } else {
            splitted.push(newStr);
            newStr = "";
        }
    }

    if (newStr !== "") {
        splitted.push(newStr);
    }

    for (let i = 0; i < splitted.length; i++) {
        if (i > 0) parameter += "-"; // add dash before 2nd+ word
        parameter += splitted[i];
    }

    return parameter;
}

console.log(string_parameterize("Ephraim Sangma from Canada.")); // "ephraim-sangma-from-canada"

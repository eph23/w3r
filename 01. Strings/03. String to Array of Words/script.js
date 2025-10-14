"use strict";

function string_to_array_1(str) {
    return str.trim().split(" ");
}

console.log(string_to_array_1("Ephraim Sangma")); // ["Ephraim", "Sangma"]

function string_to_array_2(str) {
    let arr = [];
    let newStr = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            newStr += str[i];
        } else {
            arr.push(newStr);
            newStr = "";
        }
    }
    if (newStr !== "") {
        arr.push(newStr);
    }

    return arr;
}

console.log(string_to_array_2("Ephraim Sangma")); // ["Ephraim", "Sangma"]

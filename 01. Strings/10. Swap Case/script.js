"use strict";

function swapcase(str) {
    let swapped = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toLowerCase()) {
            swapped += str[i].toUpperCase();
        } else if (str[i] === str[i].toUpperCase()) {
            swapped += str[i].toLowerCase();
        }
    }

    return swapped;
}

console.log(swapcase("PythOn")); // "aAbBC"

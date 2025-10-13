"use strict";
function is_Blank(str) {
    const trimmed = str.trim();

    if (trimmed.length === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(is_Blank("")); // true
console.log(is_Blank("abc")); // false

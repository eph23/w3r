"use strict";

// Solution 1
function is_string_1(str) {
    if (typeof str === "string") {
        return true;
    } else {
        return false;
    }
}

console.log(is_string_1("w3resource")); // true
console.log(is_string_1([1, 2, 4, 0])); // false

// Solution 2
function is_string_2(str) {
    if (Object.prototype.toString.call(str) === "[object String]") {
        return true;
    } else {
        return false;
    }
}

console.log(is_string_2("w3resource")); // true
console.log(is_string_2([1, 2, 4, 0])); // false

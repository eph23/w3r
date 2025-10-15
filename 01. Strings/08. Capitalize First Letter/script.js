"use strict";
function capitalize(str) {
    const newStr = str.trim().toLowerCase();

    return `${newStr[0].toUpperCase()}${newStr.slice(1)}`;
}

console.log(capitalize("js string exercises")); // "Js string exercises"

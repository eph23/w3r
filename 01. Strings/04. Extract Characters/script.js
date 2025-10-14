"use strict";

function truncate_string(str, length) {
    let sliced = "";

    for (let i = 0; i < length; i++) {
        sliced += str[i];
    }

    return sliced;
}

console.log(truncate_string("Ephraim Sangma", 4)); // "Ephr"

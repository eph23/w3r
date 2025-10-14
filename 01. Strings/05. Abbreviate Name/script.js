"use strict";

function abbrev_name(str) {
    let splitted = str.trim().split(" ");
    console.log(splitted);

    if (splitted.length > 0) {
        return `${splitted[0]} ${splitted[splitted.length - 1].charAt(0)}.`;
    }
}

console.log(abbrev_name("Ephraim Sangma")); // "Ephraim S."

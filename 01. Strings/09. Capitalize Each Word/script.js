"use strict";
function capitalize_Words(string) {
    let rectStr = string.trim().toLowerCase();

    let splitted = [];
    let splittedCap = [];
    let eachWord = "";

    let capitalized = "";

    for (let letter of rectStr) {
        if (letter !== " ") {
            eachWord += letter;
        } else {
            splitted.push(eachWord);
            eachWord = "";
        }
    }

    if (eachWord !== "") {
        splitted.push(eachWord);
    }

    for (let split of splitted) {
        console.log(split);
        splittedCap.push(`${split[0].toUpperCase()}${split.slice(1)}`);
    }

    for (let i = 0; i < splittedCap.length; i++) {
        if (i > 0) capitalized += " "; // add dash before 2nd+ word
        capitalized += splittedCap[i];
    }

    return splittedCap;
}

console.log(capitalize_Words("js string exercises")); // "Js String Exercises"

/* function capitalize_Words(string) {
  let rectStr = string.trim().toLowerCase();
  let eachWord = "";
  let capitalized = "";
  
  for (let i = 0; i < rectStr.length; i++) {
    let ch = rectStr[i];
    
    if (ch !== " ") {
      eachWord += ch; // build current word
    }
    
    if (ch === " " || i === rectStr.length - 1) {
      if (eachWord !== "") {
        // capitalize first letter and add to result
        if (capitalized !== "") capitalized += " "; // space between words
        capitalized += eachWord[0].toUpperCase() + eachWord.slice(1);
        eachWord = ""; // reset for next word
      }
    }
  }
  
  return capitalized;
} */

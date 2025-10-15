"use strict";

function protect_email(user_email) {
    let splitted = user_email.split("@");

    let userName = splitted[0].slice(0, splitted[0].length / 3);
    let domain = splitted[1];

    return `${userName.padEnd(splitted[0].length, "*")}@${domain}`;
}

console.log(protect_email("ephraim_sangma@example.com")); // "ephr...@example.com"

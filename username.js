'use strict';

const username = prompt("Username:");

if (username == "yummy"){
    console.log(username + " logged in")
    window.location = "loggedin.html";
} else {
    alert("Try again. Psst, it's 'yummy'.")
    window.location = "logging.html";
};





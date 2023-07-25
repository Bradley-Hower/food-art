'use strict';

const passwordinput = prompt("Password:");

if (passwordinput == "go"){
    document.write("Hello, Yummy.")
    console.log(username + " logged in")
    window.location = "loggedin.html"
} else {
    alert("Try again. Psst, it's 'go'.")
    window.location = "logging.html";
};





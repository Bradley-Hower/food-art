'use strict';




console.log("Here we are");


if (confirm("Visiting might make you hungry. Is that alright?")) {
} else {
    alert("Last chance to leave. Press OK to enter.");
}

if (confirm("Have you been here before? If yes, press OK. If no, press cancel.")) {
    document.write("Welcome back. ")
} else {
    document.write("We're glad you found us. ")
}

//alert("Have you been here before?");


const userResponse = prompt("Super. What kind of day is today?");
console.log(userResponse);

alert("Maybe try logging in.");

if (userResponse == "good"){
    document.write("Today is " + userResponse + ". Fantastic. Let's believe we can make it even better. ");
} else if (userResponse == "great"){
    document.write("Today is " + userResponse + ". Fantastic. Let's believe we can make it even better. ");
} else if (userResponse == "nice"){
    document.write("Today is " + userResponse + ". Fantastic. Let's believe we can make it even better. ");
} else if (userResponse == "beautiful"){
    document.write("Today is " + userResponse + ". Fantastic. Let's believe we can make it even better. ");
} else if (userResponse == "sunny"){
    document.write("Today is " + userResponse + ". Fantastic. Let's believe we can make it even better. ");
} else if (userResponse == "bright"){
    document.write("Today is " + userResponse + ". Fantastic. Let's believe we can make it even better. ");
} else if (userResponse == "clear"){
    document.write("Today is " + userResponse + ". Fantastic. Let's believe we can make it even better. ");
} else {
    document.write("Even though today is " + userResponse + ", let's believe we can make it better. ");
}
document.write("We hope you enjoy your stay.");







'use strict';





function visitwarning(){
    if (confirm("Visiting might make you hungry. Is that alright?")) {
    } else {
        alert("Last chance to leave. Press OK to enter.");
    }
}




//alert("Have you been here before?");





function userfont(){
    let fontSizeChoice = prompt("Customized for you. Pick a font size number.");
    let fontColorChoice = prompt("Pick a color.");
    let returningtext = document.write('&nbsp;<span style="color: ' + fontColorChoice + '; font-size: ' + fontSizeChoice +'pt";>Poof!</span>&nbsp;What you do in the world comes back to you.');
    return returningtext;
}



function visitorstatus(){
    if (confirm("Have you been here before? If yes, press OK. If no, press cancel.")) {
        document.write("Welcome back. ");
    } else {
        document.write("We're glad you found us. ");
    }
}




///=====================================



function daystatus(){
    let itbesaytheday = prompt("Super. What kind of day is today?");
    console.log(itbesaytheday);
    return itbesaytheday;
}


function daystatusresponse(usersresponseinput){
    let daystatusinput = usersresponseinput
    let reply1 = "Today is " + daystatusinput + ". Fantastic. Let's believe we can make it even better. ";
    if (daystatusinput == "good"){
        document.write(reply1);
    } else if (daystatusinput == "great"){
        document.write(reply1);
    } else if (daystatusinput == "nice"){
        document.write(reply1);
    } else if (daystatusinput == "beautiful"){
        document.write(reply1);
    } else if (daystatusinput == "sunny"){
        document.write(reply1);
    } else if (daystatusinput == "bright"){
        document.write(reply1);
    } else if (daystatusinput == "clear"){
        document.write(reply1);
    } else if (daystatusinput == "super"){
        document.write(reply1);
    } else if (daystatusinput == null){
        document.write("It's okay you didn't want to reply. Let's believe today can be better. ");
    } else if (daystatusinput == ""){
        document.write("It's okay you didn't want to reply. Let's believe today can be better. ");
    } else {
        document.write("Even though today is " + daystatusinput + ", let's believe we can make it better. ");
    }
    document.write("We hope you enjoy your stay.");
}






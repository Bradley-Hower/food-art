'use strict';





function visitwarning(){
    if (confirm("Visiting might make you hungry. Is that alright?")) {
    } else {
        alert("Last chance to leave. Press OK to enter.");
    }
}




//alert("Have you been here before?");





function user_referrals(){
    let referralnumber = -1;
    while (referralnumber < 0 || referralnumber > 10 || isNaN(referralnumber) || referralnumber == '' || referralnumber.charAt(0) == ' '){
        referralnumber = prompt("How many people will you tell about my website? Pick a number (0-10).");
    } 
    let referral_response = ''
    if (referralnumber >= 5){
        referral_response = 'Wow! You will refer me to ' + referralnumber + ' people. I appreciate you!';
    }else if ((referralnumber > 1) && (referralnumber < 5)){ 
        referral_response = 'Great! You will refer me to ' + referralnumber + ' people. Thank you.';
    } else if (referralnumber == 1){ 
        referral_response = 'Great! You will refer me to one person. Thank you.';    
    } else {
        referral_response = 'I am so sad. You said you will give me zero refferrals.';
    }
    document.write(referral_response);
    console.log(referralnumber)
    document.write('<container>')
    for (let i=0; i < referralnumber; i++){
            document.write('<img src="thankyougesture.png" alt="folded hands" />');
    }
    if (referralnumber == 0 || referralnumber == null){
        document.write('<img src="sadface.png" alt="Frowning face drawn on dewy glass, with water dripping. Dripping makes face look like crying." />');
    }
    document.write('</container>')
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
    } else if (daystatusinput == null || daystatusinput.charAt(0) == ' '){
        document.write("It's okay you didn't want to reply. Let's believe today can be better. ");
    } else if (daystatusinput == ""){
        document.write("It's okay you didn't want to reply. Let's believe today can be better. ");
    } else {
        document.write("Even though today is " + daystatusinput + ", let's believe we can make it better. ");
    }
    document.write("We hope you enjoy your stay.");
}






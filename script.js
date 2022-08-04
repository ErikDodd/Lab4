function yourName() {
    let person = prompt("Please enter your name");
    while(person == ''){
        person = ("Please enter your name")
    }
    if (person == "Erik"){
        document.getElementById("greeting").innerHTML =
        "Way to Go " + person + "!";
    }
     else {
        document.getElementById("greeting").innerHTML =
        "Hello " + person + "! How are you today?";
    } 
}

function yourActivities() {
    let text;
    if (confirm("Looking for fun activities in Seattle?") == true) {
    text = "Awesome! We can help you!";
    } else {
        text = "No worries! We can still help you!";
    }    
}
yourName();
yourActivities();

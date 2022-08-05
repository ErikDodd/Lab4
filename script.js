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

function askQuestion(){
    let response = prompt('Do you like Seattle?'); 
    if (response.toLowerCase() === 'no'){
    alert('That’s wrong!');
    }
    else if (response.toLowerCase() === 'yes') {
    alert('That’s Awesome!');    
    }
    else if (response.toLowerCase() !== 'yes' || 'no' ){
    alert('Please enter another command');
    } 
    }
yourName();
yourActivities();
askQuestion();

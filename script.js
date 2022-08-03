let person = prompt("Please enter your name");
if (person != null) {
    document.getElementById("greeting").innerHTML =
    "Hello " + person + "! How are you today?";
} 

console.log(person)

let text;
if (confirm("Looking for fun activities in Seattle?") == true) {
text = "Awesome! We can help you!";
} else {
    text = "No worries! We can still help you!";
}

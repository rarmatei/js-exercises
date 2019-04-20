/*
Task 1
=======


Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.



/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

/*
Task 3
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/

/*
Task 4
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.

*/
var body = document.querySelector("body");
body.style.backgroundColor = "yellow";

function alertsomething() {
  alert("Thanks for visiting Bikes for Refugees!");
}
var alertButton = document.querySelector("#alertBtn");
alertButton.addEventListener("click", alertsomething);

var paragraph = document.createElement("p");
var textButton = document.querySelector("#addTextBtn");
textButton.addEventListener("click", function() {
  textButton.appendChild(paragraph);
});

paragraph.innerText = "Read more below.";

var largerLinks = document.querySelectorAll("a");
var linksButton = document.querySelector("#largerLinksBtn");
linksButton.addEventListener("click", function() {
  largerLinks.forEach(changeA);
});

function changeA(link) {
  link.style.fontSize = "72px";
}

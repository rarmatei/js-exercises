/*
Task 1
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
var body = document.querySelector("body");
var changeColor = document.querySelector("#bgrChangeBtn");
function backgroundColor() {
  body.style.backgroundColor = "grey";
}
changeColor.addEventListener("click", backgroundColor);
/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
var alertButton = document.querySelector("#alertBtn");
function message() {
  alert("Thanks for visiting Bikes for Refugees!");
}

alertButton.addEventListener("click", message);
/*
Task 3
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
var addText = document.querySelector("#addTextBtn");

var paragraph = document.createElement("p");
addText.parentElement.appendChild(paragraph);
function addPar() {
  paragraph.innerText = "Read more below.";
}
addText.addEventListener("click", addPar);
/*
Task 4
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.


*/

var largerLink = document.querySelector("#largerLinksBtn");
var links = document.querySelectorAll("a");
function biggerText(link) {
  link.style.fontSize = "25px";
}

largerLink.addEventListener("click", function() {
  links.forEach(biggerText);
});

/*
Task 1
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
var background = document.querySelector("body");
var colourChangingBtn = document.querySelector("#bgrChangeBtn");
function changeColor() {
  background.style.backgroundColor = "yellow";
}
colourChangingBtn.addEventListener("click", changeColor);
/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
var alertBtn = document.querySelector("#alertBtn");
function messageAlert() {
  alert("Thanks for visiting Bikes for Refugees!");
}
alertBtn.addEventListener("click", messageAlert);
/*
Task 3
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
var addTextBtn = document.querySelector("#addTextBtn");
var paragraph = document.createElement("p");
addTextBtn.parentElement.appendChild(paragraph);
function addText() {
  paragraph.innerText = "Read more below.";
}
addTextBtn.addEventListener("click", addText);

/*
Task 4
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.

*/
var allLinks = document.querySelectorAll("a");
var largeText = document.querySelector("#largerLinksBtn");

function makeTextBigger(links) {
  links.style.fontSize = "XX-large";
}
function applyForAll() {
  allLinks.forEach(makeTextBigger);
}

largeText.addEventListener("click", applyForAll);

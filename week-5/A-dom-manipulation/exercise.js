/*
Task 1
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
var body = document.querySelector("body");
var button = document.querySelector("#bgrChangeBtn");
function changeColour() {
  body.style.backgroundColor = "yellow";
}
button.addEventListener("click", changeColour);
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
var addTextButton = document.querySelector("#addTextBtn");

function addText() {
  var buttonContainer = document.querySelector(".buttons");
  var newParagraf = document.createElement("p");
  buttonContainer.appendChild(newParagraf);
  newParagraf.innerText = "Read more below.";
}
addTextButton.addEventListener("click", addText);
/*
Task 4
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
var buttonLargerLinks = document.querySelector("#largerLinksBtn");
var linksList = document.querySelectorAll("a");
buttonLargerLinks.addEventListener("click", function() {
  linksList.forEach(link => (link.style.fontSize = "22px"));
});

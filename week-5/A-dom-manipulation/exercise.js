/*
Task 1
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
function changeColor() {
  var body = document.querySelector("body");
  body.style.backgroundColor = "blue";
}

var changeColorButton = document.querySelector("#bgrChangeBtn");
changeColorButton.addEventListener("click", changeColor);

/*



Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
function thanksForVisit() {
  alert("Thanks for visiting Bikes for Refugees!");
}

var alertButton = document.querySelector("#alertBtn");
alertButton.addEventListener("click", thanksForVisit);

/*
Task 3
======
My Github
I have 6 repos on my Github.

Use AJAX to load your repos from your Github and show them on this page.

    Js-exercises



When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
function addNewParagraph() {
  var divButton = document.querySelector(".buttons"); //find father where you want to put your element
  var newParagraph = document.createElement("p"); //create paragraph which is empty
  divButton.appendChild(newParagraph); //add new paragraph to father
  newParagraph.innerText = "Read more below."; //give value to element
}
var addSomeText = document.querySelector("#addTextBtn");
/*
Task 3
======

addSomeText.addEventListener("click", addNewParagraph);
/*
Task 4
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
function increaseLinkSize() {
  var links = document.querySelectorAll("a");
  links.forEach(function(element) {
    //we need to put parameter here this function called anomious
    element.style.fontSize = "52px";
  });
}

var increaseSize = document.querySelector("#largerLinksBtn");
increaseSize.addEventListener("click", increaseLinkSize);

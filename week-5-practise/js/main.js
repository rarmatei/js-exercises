var jumbotron = document.querySelector(".jumbotron");
var DonateABike = document.querySelector(".btn btn-primary btn-lrg");
var Volunteer = document.querySelector(".btn btn-secondary btn-lrg");
var blueButton = document.querySelector("#blueBtn");
var orangeButton = document.querySelector("#orangeBtn");
var greenButton = document.querySelector("#greenBtn");

function blue() {
  jumbotron.style.backgroundColor = ".588fbd";
  DonateABike.style.backgroundColor = ".ffa500";
  Volunteer.style.backgroundColor = "black";
  Volunteer.style.backgroundColor = "white";
}
blueButton.addEventListener("click", blue);

function orange() {
  jumbotron.style.backgroundColor = "#f0ad4e";
  DonateABike.style.backgroundColor = ".5751fd";
  Volunteer.style.backgroundColor = "#31b0d5";
  Volunteer.style.backgroundColor = "white";
}
orangeButton.addEventListener("click", orange);

function green() {
  jumbotron.style.backgroundColor = "#87ca8a";
  DonateABike.style.backgroundColor = ".black";
  Volunteer.style.backgroundColor = "#8c9c08";
}
greenButton.addEventListener("click", green);

var emailInput = document.querySelector("#exampleInputEmail1");
var nameInput = document.querySelector("#example-text-input");
var describeTextarea = document.querySelector("#exampleTextarea");
var submitButton = document.querySelector(".btn.btn-primary");
var allInputs = [emailInput, nameInput, describeTextarea];

function validemail() {
  return emailInput.value.includes("@");
}
function inputHasLengthGreaterThanZero(element) {
  return element.value.length > 0;
}
submitButton.addEventListener("click", function(event) {
  event.preventDefault();
  allInputs.forEach(function(element) {
    if (element.value.length > 0) {
      element.style.backgroundColor = "green";
    } else {
      element.style.backgroundColor = "red";
    }
  });
});

if (allInputsAreValid === true) {
  alert("Thank you for filling out the form");
}
allInputs.forEach(function(element) {
  element.value = "";
});

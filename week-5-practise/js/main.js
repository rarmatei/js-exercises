var jumbotron = document.querySelector(".jumbotron");
var DonateABikeBtn = document.querySelector(".btn-primary.btn-lrg");
var volunteerBTn = document.querySelector(".btn-secondary");
var blueBotton = document.querySelector("#blueBtn");
var orangeBotton = document.querySelector("#orangeBtn");
var greenBotton = document.querySelector("#greenBtn");
var registryForm = document.querySelector("form");
function blueBtnReflect() {
  jumbotron.style.backgroundColor = "#588fbd";
  DonateABikeBtn.style.backgroundColor = "#ffa500";
  volunteerBTn.style.backgroundColor = "black";
  volunteerBTn.style.color = "white";
}

blueBotton.addEventListener("click", blueBtnReflect);

function orangeBtnReflect() {
  jumbotron.style.backgroundColor = "#f0ad4e";
  DonateABikeBtn.style.backgroundColor = "#5751fd";
  volunteerBTn.style.backgroundColor = "#31b0d5";
  volunteerBTn.style.color = "white";
}

orangeBotton.addEventListener("click", orangeBtnReflect);

function greenBtnReflect() {
  jumbotron.style.backgroundColor = "#87ca8a ";
  DonateABikeBtn.style.backgroundColor = "black";
  volunteerBTn.style.backgroundColor = " #8c9c08";
}

greenBotton.addEventListener("click", greenBtnReflect);

// part 2 -----------------------------------------------

var emailInput = document.querySelector("#exampleInputEmail1");
var nameInput = document.querySelector("#example-text-input");
var describeYouselfTextArea = document.querySelector("#exampleTextarea");
var submitBtn = document.querySelector(".submit-btn");
var allInputs = [emailInput, nameInput, describeYouselfTextArea];

function valedEmail() {
  return emailInput.value.includes("@");
}
function submition(event) {
  event.preventDefault();
  if (
    valedEmail() === true &&
    emailInput.value.length > 0 &&
    nameInput.value.length > 0 &&
    describeYouselfTextArea.value.length > 0
  ) {
    return alert("thank you for filling out the form"), registryForm.reset();
  } else {
    if (
      valedEmail() === false ||
      emailInput.value.length === 0 ||
      nameInput.value.length === 0 ||
      describeYouselfTextArea.value.length === 0
    ) {
      return allInputs.forEach(
        element => (element.style.backgroundColor = "red")
      );
    }
  }
}
submitBtn.addEventListener("click", submition);

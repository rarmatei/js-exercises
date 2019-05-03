var blueButton = document.querySelector("#blueBtn");
var orangeButton = document.querySelector("#orangeBtn");
var greenButton = document.querySelector("#greenBtn");
function changeTheme(colour1, colour2, colour3, colour4) {
  document.querySelector(".jumbotron").style.background = colour1;
  document.querySelector(
    "div.buttons a.btn-primary"
  ).style.background = colour2;
  document.querySelector(
    "div.buttons a.btn-secondary"
  ).style.background = colour3;
  document.querySelector("div.buttons a.btn-secondary").style.color = colour4;
}
blueButton.addEventListener("click", () =>
  changeTheme("#588fbd", "#ffa500", "black", "white")
);
orangeButton.addEventListener("click", () =>
  changeTheme("#f0ad4e ", "#5751fd", "#31b0d5", "white")
);
greenButton.addEventListener("click", () =>
  changeTheme("#87ca8a ", "black", "#8c9c08", "black")
);

var yourNameField = document.querySelector("#example-text-input");
var emailField = document.querySelector("#exampleInputEmail1");
var describeYourselfField = document.querySelector("#exampleTextarea");
var submitBtn = document.querySelector("button[type='submit']");
var arr = [yourNameField, emailField, describeYourselfField];

function redOrGreen(element) {
  if (element.value.length > 0) {
    console.log(element.value.length);
    element.style.background = "green";
  } else {
    element.style.background = "red";
  }
}

submitBtn.addEventListener("click", function() {
  event.preventDefault();

  arr.forEach(redOrGreen);
  if (!emailField.value.includes("@")) {
    emailField.style.background = "red";
  }

  if (arr.every(element => element.style.background.includes("green"))) {
    arr.forEach(element => {
      element.style.background = "inherit";
      element.value = "";
    });
    alert("Thank You for filling out the form");
  }
});

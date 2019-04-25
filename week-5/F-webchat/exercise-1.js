/*
Let's build a webchat to communicate with each other!

The requirements of a basic webchat are:
- The user can write a message in an input and send it after clicking on the submit button.
- After clicking on the submit button, the input should be empty.
- The user can read the existing messages in the message list.
- The message list is refreshed automatically every few seconds so
the user can keep reading the incoming messages without refreshing the page.


========
Task 1
========

Your task is to build the webchat frontend.
Some code is already written in index.html, that you can open in your browser.
For the purpose of this exercise, you are provided a server which you can interact
with to get and save messages. Some messages already exist on the server.

Your first task is to display those messages in the page,
in the HTML element with the id "message-list". Use the following API to get the messages:

HTTP Verb: GET
API: https://codeyourfuture.herokuapp.com/api/messages


===============
Expected result
===============

When you open index.html in your browser, it should display the existing messages on the page.

*/

// Write your code here
var messenger = document.querySelector("#message-list");
messenger.style.backgroundColor = "#A9D6D6";
messenger.style.marginLeft = "15px";
function displayMsgs() {
  fetch("https://codeyourfuture.herokuapp.com/api/messages")
    .then(showOldMessages => showOldMessages.json())
    .then(function(result) {
      messenger.innerHTML = "";
      result.forEach(function(message) {
        var messageContainer = document.createElement("p");
        messageContainer.style.color = "#d04071E";
        messageContainer.style.marginLeft = " 15px";
        messenger.appendChild(messageContainer);
        messageContainer.innerHTML = message.content;
      });
    });
}
var intervalID = window.setInterval(displayMsgs, 2000);
//

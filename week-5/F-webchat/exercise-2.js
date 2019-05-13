/*

========
Task 2
========

Your second task is to send a new message to the server.

After writing a message in the input and clicking on the submit button,
send the message to store it on the remote server. Use the following API:

HTTP Verb: POST
API: https://codeyourfuture.herokuapp.com/api/messages
Request Body: { "content": "some text" }


===============
Expected result
===============

After opening index.html in your browser, write a message in the input field and click
on the submit button. Then check the following:

1) The input field should be empty.
2) When you refresh the page in your browser, you should be able to see your new message in the message list.
*/

// Write your code here

var messageInput = document.querySelector("#message-input");
var submit = document.querySelector("#submit");

var message = document.querySelector("#message-list");

function getMessage() {
  var requestBody = { content: messageInput.value };
  var postRequestParameters = {
    body: JSON.stringify(requestBody),
    method: "POST",
    headers: {
      "content-type": "application/json"
    }
  };
  fetch(
    "https://codeyourfuture.herokuapp.com/api/messages",
    postRequestParameters
  );

  // fetch("https://codeyourfuture.herokuapp.com/api/messages")
  //   .then(function(response) {
  //     return response.text();
  //   })
  //   .then(function getResult(result) {
  //     messageInput.value = "";
  //     var paragraph = document.createElement("p");
  //     message.appendChild(paragraph);
  //     paragraph.innerText = result;
  //   });
}
// setInterval(getResult, 1000);

submit.addEventListener("click", getMessage);

// Write your code here

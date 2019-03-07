function percentage(one, two) {
  return Math.round((one * 100) / (one + two));
}
function Messageone(one, two, type) {
  var rough = percentage(one, two);
  var message = "Percentage " + type + ": " + rough + "%";
  return message;
}

console.log(Messageone(15, 8, "students"));
console.log(Messageone(8, 15, "mentors"));

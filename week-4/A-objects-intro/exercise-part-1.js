/*

Think of 5 different real world "things" that you 
can describe with a JavaScript object

Assign each of them to a separate variable

*/

var TheUK = {
  language: "English",
  currency: "pound £",
  population: 50000000
};

var Glasgow = {
  language: ["Gaelic", "English"],
  population: 1000000,
  country: TheUK
};

var company = {
  name: "First Bus",
  employees: 100,
  city: Glasgow
};

var Joe = {
  name: "Joe",
  job: "driver",
  age: 50,
  company: company
};

var transportation = {
  bus: {
    capacity: 100,
    driver: Joe
  },
  getDetails: function() {
    return "My driver is " + this.bus.driver.name;
  }
};

console.log(transportation.getDetails());

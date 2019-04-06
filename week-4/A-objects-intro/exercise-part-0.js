/*

Describe your own laptop as a JavaScript object

Try to think of as many properties as you can!

*/
var myLaptop = {
  brand: "Lenovo",
  screenSize: 13,
  processor: "Intel Core i5",
  touchScreen: false,
  defaultApplication: ["web", "mail", "calendar", "music", "video"],
  getBrand: function() {
    return this.brand;
  },
  user: {
    name: "Ali",
    age: 32
  }
};
console.log(myLaptop.brand);
console.log(myLaptop.screenSize);
console.log(myLaptop.touchScreen);
console.log(myLaptop.defaultApplication);
console.log(myLaptop.getBrand());
console.log(myLaptop.user.name);

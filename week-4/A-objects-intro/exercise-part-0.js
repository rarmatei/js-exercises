/*

Describe your own laptop as a JavaScript object

Try to think of as many properties as you can!

*/
var laptop = {
  screenSize: 10,
  memory:15,
  type:"sony",
  oldLaptop:true,
  owners:["Nate","Luke"],
}

var laptop2 = {
  screenSize: 10,
  memory: 15,
  type: {
    name:"apple",
    year:2018,
  },
  oldLaptop: true,
  owners: ["Nate", "Luke"],
}

var mac = {
  name:"macbook",
  year:2016,
}
var macbook ={
  name:"macbookbro",
  year:2018,
}
console.log(laptop.type);
console.log(laptop2.type);
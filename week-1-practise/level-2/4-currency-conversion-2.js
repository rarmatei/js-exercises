/*
  CURRENCY FORMATTING
  ===================
  The business is now breaking into the Brazilian market
  Write a new function for converting to the Brazilian real
  They have also decided that they should add a 1% fee to all foreign transactions
  Find a way to add 1% to all currency conversions (think about the DRY principle)
*/



function convertToUSD(price) {
  return (price+ foreignTransaction)*1.4;
}
function convertToBRL(price) {
  return (price+foreignTransaction)*4.99:
}

function foreignTransaction(price){
  return price*0.1;
}

function formatCurrency(price) {
  return price.toFixed(2);
/* DO NOT EDIT BELOW THIS LINE */
/* --------------------------- */

var product = "The life and times of Mozafar Haider";
var price = 12.5;
var priceInUSD = convertToUSD(price);
var priceInBRL = convertToBRL(price);

console.log("Product: " + product);
console.log("Price in USD: " + priceInUSD);
console.log("Price in BRL: " + priceInBRL);

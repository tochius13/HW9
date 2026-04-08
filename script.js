
let today = new Date();

let month = today.getMonth() + 1;
let day = today.getDate();
let year = today.getFullYear();

month = String(month).padStart(2, "0");
day = String(day).padStart(2, "0");

let dateMessage = "Today is " + month + "/" + day + "/" + year;

document.getElementById("dateOutput").textContent = dateMessage;



let value1 = "42";
let value2 = "19.75";
let value3 = "hello";
let value4 = "100";

let conv1 = Number(value1);
let conv2 = Number(value2);
let conv3 = Number(value3);
let conv4 = Number(value4);


let isNaN1 = Number.isNaN(conv1);
let isNaN2 = Number.isNaN(conv2);
let isNaN3 = Number.isNaN(conv3);
let isNaN4 = Number.isNaN(conv4);

let isInt1 = Number.isInteger(conv1);
let isInt2 = Number.isInteger(conv2);
let isInt3 = Number.isInteger(conv3);
let isInt4 = Number.isInteger(conv4);

let msg1 = isNaN1 ? "Valid number" : "Valid number";
let msg3 = isNaN3 ? "Not a valid number" : "Valid number";

let intMsg2 = isInt2 ? "Integer" : "Not an integer";
let intMsg4 = isInt4 ? "Integer" : "Not an integer";


let output =
  "<p>Original: '" + value1 + "' → Converted: " + conv1 +
  " → isNaN: " + isNaN1 + " → isInteger: " + isInt1 +
  " → " + msg1 + "</p>" +

  "<p>Original: '" + value2 + "' → Converted: " + conv2 +
  " → isNaN: " + isNaN2 + " → isInteger: " + isInt2 +
  " → " + intMsg2 + "</p>" +

  "<p>Original: '" + value3 + "' → Converted: " + conv3 +
  " → isNaN: " + isNaN3 + " → isInteger: " + isInt3 +
  " → " + msg3 + "</p>" +

  "<p>Original: '" + value4 + "' → Converted: " + conv4 +
  " → isNaN: " + isNaN4 + " → isInteger: " + isInt4 +
  " → " + intMsg4 + "</p>";

document.getElementById("numberConversionOutput").innerHTML = output;




let price = 50;
let taxRate = 0.1;
let shipping = 8;

let subtotal = price + shipping;
let tax = price * taxRate;
let total = subtotal + tax;

let formattedTotal = total.toFixed(2);
let bigNumber = 1000000;
let formattedBig = bigNumber.toLocaleString();


let totalMessage;

if (total >= 60) {
  totalMessage = "Total is greater than or equal to 60";
} else {
  totalMessage = "Total is less than 60";
}

let mathOutput =
  "<p>Price: $" + price + "</p>" +
  "<p>Shipping: $" + shipping + "</p>" +
  "<p>Subtotal: $" + subtotal + "</p>" +
  "<p>Tax: $" + tax.toFixed(2) + "</p>" +
  "<p>Total: $" + formattedTotal + "</p>" +
  "<p>Formatted number: " + formattedBig + "</p>" +
  "<p>" + totalMessage + "</p>";

document.getElementById("mathOutput").innerHTML = mathOutput;
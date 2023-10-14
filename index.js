const message1 = window.prompt("Enter first message");
const message2 = window.prompt("Enter second message");
const message3 = window.prompt("Enter third message");

alert(message3 + " " + message2 + " " + message1);

const number = 12345;
const stringNumber = number.toString().split("").join(" ");
alert(stringNumber)
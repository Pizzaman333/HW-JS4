const text1 = "Заповнене поле1";
const text2 = "Заповнене поле2";
let isFilled = Boolean(text1) && Boolean(text2);
console.log(text1);
console.log(text2);
if (isFilled === true) {
  console.log("Обидва поля заповнені");
} else {
  console.log("Не всі поля заповнені");
}
const text3 = "Заповнене поле3";
const text4 = "";
isFilled = Boolean(text3) && Boolean(text4);
console.log(text3);
console.log(text4);
if (isFilled === true) {
  console.log("Обидва поля заповнені");
} else {
  console.log("Не всі поля заповнені");
}

const numberInput1 = Number.parseFloat(prompt("Please, enter a number to add to the sum"));
const numberInput2 = Number.parseFloat(prompt("Please, enter another number to add to the sum"));
if (numberInput1 + numberInput2 > 10) {
  console.log("Сума більша за 10");
} else {
  console.log("Сума менша або дорівнює 10");
}

const textInput = prompt("Please, enter some text to check for the JavaScript word");
const hasJavascript = textInput.includes("JavaScript");
if (hasJavascript === true) {
  console.log("Текст містить слово JavaScript");
} else {
  console.log("Текст не містить слово JavaScript");
}

const numberInput3 = Number.parseFloat(prompt("Please, enter a number to check if it is included in the (10, 20) range"));
if (numberInput3 > 10 && numberInput3 < 20) {
  console.log("Число входить в діапазон від 10 до 20");
} else {
  console.log("Число не входить в діапазон від 10 до 20");
}

let userName = prompt("Please, enter your username");
if (userName.length < 3) {
  alert("Username must be at least 3 charachters long");
  userName = prompt("Please, enter your username");
} else {
  console.log(`Your username is ${userName}`);
}
let userGmail = prompt("Please, enter your gmail");
const hasAt = userGmail.includes("@.")
if (hasAt === false) {
  alert("Username must include @.");
  userGmail = prompt("Please, enter your gmail");
} else {
  console.log(`Your gmail is ${userGmail}`);
}
let userPassword = prompt("Please, enter your password");
if (userPassword.length < 6) {
  alert("Password must be at least 6 charachters long");
  userPassword = prompt("Please, enter your password");
} else {
  console.log(`Your password is ${userPassword}`);
}
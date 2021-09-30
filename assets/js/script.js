// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  let userCriteria = getCriteria();

  return "password123";
}

// Should return the password criteria
function getCriteria() {
  //Get the password length from the user
  const userCriteria = {};
  userCriteria.length = parseInt(
    prompt(
      "Please choose the length of your password. (Between 8 and 128 characters)"
    )
  );

  // Validate the Length input
  if (isNaN(userCriteria.length)) {
    alert("Please choose a number between 8 and 128");
    return;
  }

  if (userCriteria.length < 8 || userCriteria.length > 128) {
    alert("Please choose a number between 8 and 128");
    return;
  }

  //Get other criteria
  userCriteria.isLowercase = confirm("Do you wanna use Lowercase characters?");

  userCriteria.isUppercase = confirm("Do you wanna use Uppercase characters?");

  userCriteria.isNumeric = confirm("Do you wanna use Numbers?");

  userCriteria.isSpecialCharacter = confirm(
    "Do you wanna use Especial characters?"
  );

  // Validate the other criteria
  if (
    userCriteria.isLowercase == false &&
    userCriteria.isUppercase == false &&
    userCriteria.isNumeric == false &&
    userCriteria.isSpecialCharacter == false
  ) {
    alert("You need to choose at least one type of character!");
    return;
  }

  return userCriteria;
}

//Create a array of user choices
let userChoices = [];

//Pick a random array
//pick a random character from the array
//Push the character to the password array

//Declaring Arrays
const lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "x",
  "w",
  "y",
  "z",
];

const uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "X",
  "W",
  "Y",
  "Z",
];

const numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const specialCharacters = [
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "]",
  "[",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

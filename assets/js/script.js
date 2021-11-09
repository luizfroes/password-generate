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

// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  const userCriteria = finalCriteria();

  //Main Array
  const choicesArray = getChoices(userCriteria);

  //Final password
  const password = [];

  //Loop
  for (let index = 0; index < userCriteria.length; index++) {
    //pick a random character from the main array
    let randomCharacter =
      choicesArray[Math.floor(Math.random() * choicesArray.length)];

    //Push the character to the password array
    password.push(randomCharacter);
  }

  return password.join("");
}

//Get the password length from the user
const getLength = () => {
  let length = parseInt(
    prompt(
      "Please choose the length of your password. (Between 8 and 128 characters)"
    )
  );

  // Validate the Length input
  if (isNaN(length)) {
    alert("Please choose a number between 8 and 128");
    length = getLength();
  }

  if (length < 8 || length > 128) {
    alert("Please choose a number between 8 and 128");
    length = getLength();
  }
  return length;
};

//Get other criteria
function getCriteria() {
  const isLowercase = confirm("Do you wanna use Lowercase characters?");

  const isUppercase = confirm("Do you wanna use Uppercase characters?");

  const isNumeric = confirm("Do you wanna use Numbers?");

  const isSpecialCharacter = confirm("Do you wanna use Especial characters?");

  // Validate the other criteria
  if (!isLowercase && !isUppercase && !isNumeric && !isSpecialCharacter) {
    alert("You need to choose at least one type of character!");
    return getCriteria();
  }

  return { isLowercase, isUppercase, isNumeric, isSpecialCharacter };
}

//Store the data inside an object
function finalCriteria() {
  const userCriteria = {};
  userCriteria.length = getLength();

  const { isLowercase, isUppercase, isNumeric, isSpecialCharacter } =
    getCriteria();
  userCriteria.isLowercase = isLowercase;
  userCriteria.isUppercase = isUppercase;
  userCriteria.isNumeric = isNumeric;
  userCriteria.isSpecialCharacter = isSpecialCharacter;

  return userCriteria;
}

//Push the criteria to the userChoices array
function getChoices(userCriteria) {
  //User choices
  let userChoices = [];

  if (userCriteria.isLowercase) {
    userChoices = userChoices.concat(lowercase);
  }

  if (userCriteria.isUppercase) {
    userChoices = userChoices.concat(uppercase);
  }

  if (userCriteria.isNumeric) {
    userChoices = userChoices.concat(numeric);
  }

  if (userCriteria.isSpecialCharacter) {
    userChoices = userChoices.concat(specialCharacters);
  }

  return userChoices;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

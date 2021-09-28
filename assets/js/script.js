// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  return;
}
// PLEASE ADD ALL YOUR CODE HERE

// Should return the password criteria
const getLengthCriteria = function () {
  const userCriteriaLength = prompt(
    "Please choose the length of your password. (Between 8 and 128 characters)"
  );
  return userCriteriaLength;
};

// Validate the Length input true or false

const validateLength = function (userCriteriaLength) {
  return;
};

//Should return generatePassword()
const getRandomPassword = function () {
  return;
};

//Should return a random character from the picked array
const getRandomCharacter = function () {
  return;
};

const userCriteria = {
  length: 0,
  isUppercase: true,
  isLowercase: true,
  isNumeric: true,
  isSpecialCharacter: true,
};

const userCriteriaLength = getLengthCriteria();
console.log(userCriteriaLength);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

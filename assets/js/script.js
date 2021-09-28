// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  return;
}
// PLEASE ADD ALL YOUR CODE HERE

// Should return the password criteria
function getCriteria() {
  //Get the password length from the user
  userCriteria.length = prompt(
    "Please choose the length of your password. (Between 8 and 128 characters)"
  );

  // Validate the Length input
  if (isNaN(userCriteria.length)) {
    return getCriteria();
  }

  const passwordLength = parseInt(userCriteria.length);

  if (passwordLength < 8 || passwordLength > 128) {
    return getCriteria();
  }

  //Get the other criteria
  userCriteria.isLowercase = confirm("Do you wanna use Lowercase characters?");

  userCriteria.isUppercase = confirm("Do you wanna use Uppercase characters?");

  userCriteria.isNumeric = confirm("Do you wanna use Numbers?");

  userCriteria.isSpecialCharacter = confirm(
    "Do you wanna use Especial characters?"
  );

  return userCriteria;
}

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

getCriteria();
console.log(userCriteria);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  let userChoices = getCriteria();
  console.log(userChoices);
  return "password123";
}
// PLEASE ADD ALL YOUR CODE HERE

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

//Should return generatePassword()
const getRandomPassword = function () {
  return;
};

//Should return a random character from the picked array
const getRandomCharacter = function () {
  return;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

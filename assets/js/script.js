// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // PLEASE ADD ALL YOUR CODE HERE

  // Should return the password criteria
  const getCriteria = function () {
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
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

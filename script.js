// Assignment Code

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Homework Code

function generatePassword() {
  var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numberschoice = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var characterschoice = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

  var result = [];
  var newPassword = [];

  var HowmanyCharc = prompt("How many Characters do you want in your password? Choose between 8 and 128.");
  if (HowmanyCharc < 8 || HowmanyCharc > 128 || isNaN(HowmanyCharc)) {  
    return alert("Please choose a number between 8 - 128. Click on Red button to start over.")
  }
  var numbers = confirm("Do you want numbers in your password?");
  var uppercases = confirm("Do you want uppercase letters in your password?");
  var lowercases = confirm("Do you want lowercase letters in your password?");
  var characters = confirm("Do you want special characters in your password?");

  // If statements for the arrays 

  if (uppercases) {
    result = result.concat(uppercaseLetters);

  }

  if (lowercases) {
    result = result.concat(lowercaseLetters);

  }

  if (numbers) {
    result = result.concat(numberschoice);

  }

  if (characters) {
    result = result.concat(characterschoice);
  }
  console.log(result)


  //Math

  for (var i = 0; i < HowmanyCharc; i++) {

    newPassword.push(result[Math.floor(Math.random() * result.length)]);
  }

  return newPassword.join("");
}

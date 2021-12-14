function generatePassword() {
    var passwordLength;
    // Prompt user for password length
    passwordLength = prompt("Please enter desired password length (8 - 128 inclusive)");
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
    var passwordLength;
    var validLength = false; // Boolean to assist in while-loop input validation

    // While there is an valid length entered, the user will keep being prompted
    while (!validLength) {
        // Prompt user for password length
        passwordLength = prompt("Please enter desired password length (8 - 128 inclusive)");
        passwordLength = parseInt(passwordLength); // Gets integer value of string
        
        // Checks that length is between 8 and 128 inclusive
        if (passwordLength >= 8 && passwordLength <= 128)
        {
            validLength = true;
        } else {
            alert("Invalid entry, try again...") // Error message
        }
    }
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

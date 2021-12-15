// Generates password according to user's desired criteria
function generatePassword() {
    promptPasswordLength();
    promptCharacterTypes();
}

// Prompt user to enter the password length
function promptPasswordLength() {
    var passwordLength;
    var validLength = false; // Boolean to assist in while-loop input validation

    // While there is an valid length entered, the user will keep being prompted
    while (!validLength) {
        // Prompt user for password length
        passwordLength = prompt("Please enter desired password length (8 - 128 inclusive)");
        passwordLength = parseInt(passwordLength); // Gets integer value of string

        // Checks that length is between 8 and 128 inclusive
        if (passwordLength >= 8 && passwordLength <= 128) {
            validLength = true;
        } else {
            alert("Invalid entry, please try again..."); // Error message
        }
    }
    console.log(passwordLength);
}

// Prompt user for desired character types to include in 
function promptCharacterTypes()
{
    // const characterTypes = {
    //     lowercaseLetters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    //     uppercaseLetters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    //     numbers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    //     specialCharacters: [' ', '!', '"', '#', '$', '%', '&', '\'', '(', ')', '*','+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~']
    // };

    // Initialize arrays containing different character types
    const lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const specialCharacters = [' ', '!', '"', '#', '$', '%', '&', '\'', '(', ')', '*','+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];

    // Array that will hold the character types to be included in the password
    var selectedCharacterTypes = [];

    // Initialize booleans that tell program which character types to include
    var includeLowercase = false;
    var includeUppercase = false;
    var includeNumbers = false;
    var includeSpecial = false;

    // Boolean helps notify loop when user is done choosing character types to include
    var doneSelecting = false;

    while ((!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecial) || !doneSelecting) {
        var characterTypeOption = prompt("Which character types whould you like to include in the password? Please enter 1 for LOWERCASE LETTERS, 2 for UPPERCASE LETTERS, 3 for NUMBERS, 4 for SPECIAL CHARACTERS, or 5 to FINISH.");
        characterTypeOption = parseInt(characterTypeOption);

        switch (characterTypeOption) {
            case 1:
              includeLowercase = true;
              break;
            case 2:
              includeUppercase = true;
              break;
            case 3:
              includeNumbers = true;
              break;
            case 4:
                includeSpecial = true;
                break;
            case 5:
                // If user says they are done, confirm that they want to proceed with their choices
                var confirmSelections = window.confirm("Are you content with your choices?");
                if (confirmSelections && (includeLowercase || includeUppercase || includeNumbers || includeSpecial)) {
                 doneSelecting = true;
                  } 
                 else {
                   window.alert("No problem, keep choosing!");
                  }
                  break;
            default:
              window.alert("Invalid entry, please try again...");
              break;
          }
    }

    /* 
    This epic conditional wall creates the pool of characters that will be used to generate
    the password according to the character types that the user has selected
    */
    if (includeLowercase && includeUppercase && includeNumbers && includeSpecial) {
        selectedCharacterTypes = lowercaseLetters.concat(uppercaseLetters, numbers, specialCharacters);
    } else if (includeLowercase && includeUppercase && includeNumbers) {
        selectedCharacterTypes = lowercaseLetters.concat(uppercaseLetters, numbers);
    } else if (includeLowercase && includeUppercase && includeSpecial) {
        selectedCharacterTypes = lowercaseLetters.concat(uppercaseLetters, specialCharacters);
    } else if (includeLowercase && includeNumbers && includeSpecial) {
        selectedCharacterTypes = lowercaseLetters.concat(numbers, specialCharacters);
    } else if (includeLowercase && includeUppercase) {
        selectedCharacterTypes = lowercaseLetters.concat(uppercaseLetters);
    } else if (includeLowercase && includeNumbers) {
        selectedCharacterTypes = lowercaseLetters.concat(numbers);
    } else if (includeLowercase && includeSpecial) {
        selectedCharacterTypes = lowercaseLetters.concat(specialCharacters);
    } else if (includeLowercase) {
        selectedCharacterTypes = lowercaseLetters;
    } else if (includeUppercase && includeNumbers && includeSpecial) {
        selectedCharacterTypes = uppercaseLetters.concat(numbers, specialCharacters);
    } else if (includeUppercase && includeNumbers) {
        selectedCharacterTypes = uppercaseLetters.concat(numbers);
    } else if (includeUppercase && includeSpecial) {
        selectedCharacterTypes = uppercaseLetters.concat(specialCharacters);
    } else if (includeUppercase) {
        selectedCharacterTypes = uppercaseLetters;
    } else if (includeNumbers && includeSpecial) {
        selectedCharacterTypes = numbers.concat(specialCharacters);
    } else if (includeNumbers) {
        selectedCharacterTypes = numbers;
    } else {
        selectedCharacterTypes = specialCharacters;
    }

    console.log(selectedCharacterTypes);
}
// prom references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

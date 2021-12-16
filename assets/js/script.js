var passwordLength; // Hold the user's desired password length after being prompted
var selectedCharacterTypes = []; // Array that holds all of the character types that the user selected when prompted

// Generates password according to user's desired criteria
function generatePassword() {
    promptPasswordLength(); // Prompt user for password length
    promptCharacterTypes(); // Prompt user for character types to include in password

    var randomizedPassword = ""; // Variable to hold randomized password string

    /*
    Chooses a random character from the character pool array and adds it to the
    randomized password string. passwordLength, which was chosen by the user will 
    dictate how long the generated password will be
    */
    for (var i = 0; i < passwordLength; i++) {
        randomizedPassword += selectedCharacterTypes[Math.floor(Math.random() * selectedCharacterTypes.length)];
    }
    
    return randomizedPassword; // Returns the newly generated password
}

// Prompt user to enter the password length
function promptPasswordLength() {
    var validLength = false; // Boolean to assist in while-loop input validation

    // While there is an valid length entered, the user will keep being prompted
    while (!validLength) {
        // Prompt user for password length
        passwordLength = prompt(">>Please enter desired password length.\n (Must enter be a number between 8 - 128 inclusive)");
        passwordLength = parseInt(passwordLength); // Gets integer value of string

        // Checks that length is between 8 and 128 inclusive
        if (passwordLength >= 8 && passwordLength <= 128) {
            validLength = true;
        } else {
            alert("Invalid entry, please try again..."); // Error message if an invalid entry occurs
        }
    }
}

// Prompt user for desired character types to include in the password creation
function promptCharacterTypes()
{
    // Object constant that stores arrays of all the character types
    const characterType = {
        lowercaseLetters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
        uppercaseLetters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
        numbers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
        specialCharacters: [' ', '!', '"', '#', '$', '%', '&', '\'', '(', ')', '*','+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~']
    };

    // Initialize booleans that tell program which character types to include
    var includeLowercase = false;
    var includeUppercase = false;
    var includeNumbers = false;
    var includeSpecial = false;

    // Boolean helps notify loop when user is done choosing character types to include
    var doneSelecting = false;

    // While-loop that loops until the user is done selecting or no selections have been made
    while ((!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecial) || !doneSelecting) {
        var characterTypeOption = prompt("Which character types whould you like to include in the password?\n\n>>1 for LOWERCASE LETTERS\n>>2 for UPPERCASE LETTERS\n>>3 for NUMBERS\n>>4 for SPECIAL CHARACTERS\n>>5 to FINISH");
        characterTypeOption = parseInt(characterTypeOption);

        // Switch-statement to mark true the character types that the user selects
        switch (characterTypeOption) {
            case 1:
                if (!includeLowercase) // If option is selected, array will include lowercase letters
                {
                    selectedCharacterTypes = selectedCharacterTypes.concat(characterType.lowercaseLetters);

                    alert("Including lowercase letters...");
                    includeLowercase = true;
                } else
                {
                    alert("You already chose this character type!");
                }
                break;
            case 2:
                if (!includeUppercase) // If option is selected, array will include uppercase letters
                {
                    selectedCharacterTypes = selectedCharacterTypes.concat(characterType.uppercaseLetters);

                    alert("Including uppercase letters...");
                    includeUppercase = true;
                } else
                {
                    alert("You already chose this character type!");
                }
                break;
            case 3:
                if (!includeNumbers) // If option is selected, array will include numbers
                {
                    selectedCharacterTypes = selectedCharacterTypes.concat(characterType.numbers);

                    alert("Including numbers...");
                    includeNumbers = true;
                } else 
                {
                    alert("You already chose this character type!");
                }
                break;
            case 4:
                if (!includeSpecial) // If option is selected, array will include special characters
                {
                    selectedCharacterTypes = selectedCharacterTypes.concat(characterType.specialCharacters);

                    alert("Including special characters...");
                    includeSpecial = true;
                } else
                {
                    alert("You already chose this character type!");
                }
                break;
            case 5:
                // If user says they are done, confirm that they want to proceed with their choices
                var confirmSelections = window.confirm("Are you content with your choices?");
                if (confirmSelections && (includeLowercase || includeUppercase || includeNumbers || includeSpecial)) {
                    doneSelecting = true; // Allows user to exit loop
                } 
                else if (confirmSelections && (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecial)) {
                    window.alert("Content with what? You haven't chosen anything!");
                } else {
                    window.alert("No problem, keep choosing!");
                }
                break;
            default: // Default runs if user enters something invalid
                window.alert("Invalid entry, please try again...");
                break;
        }
    }
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

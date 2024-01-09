// Array of special characters to be included in password
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
];

// Function to prompt user for password options
function getPasswordOptions() { //This section of code serves to ascertain the core characteristics of the password to be generated.

    var passwordLengthPrompt; //Declare a variable, to serve as the repository of the chosen charachter lenght for the password. Leave it empty () so that the while loop (next line) can use it to keep going.

    while (true) { //Create an infinite loop that keeps going until a certain condition(s) (below) is/are met.
        passwordLengthPrompt = Number(prompt("How long do you want your password to be? This must be a number between 8 and 128")).toFixed(0); //Ask the user for the desired length of his password; and stipulate the parameters for acceptability. Store the answer in the variable declared above.//Make the value a number because the "toFixed(0)" (which precludes any decimal places) method does not work with strings.

        if (passwordLengthPrompt === null) { // This line makes the while loop stop if the "Cancel" button is selected by the user on the prompt dialogue box.
            break;
        }

        if (!isNaN(passwordLengthPrompt) || passwordLengthPrompt >= 8 || passwordLengthPrompt <= 128) { //This line allows the while loop to end if the stipulated conditions are met.
            break;
        }
    }

    var lowerCasePrompt = ""; //Declare a variable of the type "string", to serve as the repository of the chosen charachter type for the password. Make it an empty string so that the next while loop can use it to keep going.
    var upperCasePrompt = ""; //Declare a variable of the type "string", to serve as the repository of the chosen charachter type for the password. Make it an empty string so that the next while loop can use it to keep going.
    var numericPrompt = ""; //Declare a variable of the type "string", to serve as the repository of the chosen charachter type for the password. Make it an empty string so that the next while loop can use it to keep going.
    var specialCharPrompt = ""; //Declare a variable of the type "string", to serve as the repository of the chosen charachter type for the password. Make it an empty string so that the next while loop can use it to keep going.

    while (lowerCasePrompt !== true && upperCasePrompt !== true && numericPrompt !== true && specialCharPrompt !== true) { //Keep asking the user to select at least one of the character types presented; until they do.
        alert("Next, you will select the types of characters you want in your password. Note that you must select at least one!") //Let the user know that they must select at least one type of the characters offered as options.
        lowerCasePrompt = confirm("Would you like the password to contain lower case characters? Press OK, if yes, or Cancel if, not.") //Ask the user if they want lower case letters in their passsword; and instruct them on how to use the confirm dialogue box. Store the answer in a variable.
        upperCasePrompt = confirm("Would you like the password to contain upper case characters? Press OK, if yes, or Cancel if, not.") //Ask the user if they want upper case letters in their passsword; and instruct them on how to use the confirm dialogue box. Store the answer in a variable.
        numericPrompt = confirm("Would you like the password to contain numbers? Press OK, if yes, or Cancel if, not.") //Ask the user if they want upper case letters in their passsword; and instruct them on how to use the confirm dialogue box. Store the answer in a variable.
        specialCharPrompt = confirm("Would you like the password to contain special characters: ($@%&*, etc)?  Press OK, if yes, or Cancel if, not.") //Ask the user if they want upper case letters in their passsword; and instruct them on how to use the confirm dialogue box. Store the answer in a variable.
    }

    //Declare an object to store each user response in a group of key-value pairs. 
    var passwordOptions = {
        passwordLength: Number(passwordLengthPrompt), //Make the value a number because I noticed it was coming up as a string.
        lowerCase: lowerCasePrompt,
        upperCase: upperCasePrompt,
        numericChar: numericPrompt,
        specialChar: specialCharPrompt
    };

    return passwordOptions; // Return the object to the function value; so that when the function is called, it assumes the value of the object "passwordOptions".
}

// Function for getting a random element from an array
function getRandom(passwordGen) { // This function takes the "passwordGen" object as an argument. It will refer to the various key-value pairs to perform it's function.

    // Declare empty arrays to be used as repositories for possible collections of string elements.
    var arr = [];
    var arrLower = [];
    var arrUpper = [];
    var arrNumeric = [];
    var arrSpecial = [];

    // Saparate IF blocks that potentially (if that specific type was selected i.e. "true" by the user) assign the respective collections of array elements to their respective empty arrays.
    if (passwordGen.lowerCase == true) {
        arrLower = arr.concat(lowerCasedCharacters)
    }
    if (passwordGen.upperCase == true) {
        arrUpper = arr.concat(upperCasedCharacters)
    }
    if (passwordGen.numericChar == true) {
        arrNumeric = arr.concat(numericCharacters)
    }
    if (passwordGen.specialChar == true) {
        arrSpecial = arr.concat(specialCharacters)
    }

    arr = arrLower.concat(arrUpper).concat(arrNumeric).concat(arrSpecial); // Assign the total number of array elements to the "arr" array. Only the the ones with something inside them (from the IF blocks, above) will be consequential.

    var getRandomElement = arr[Math.floor(Math.random() * arr.length)] //Select a random element from the "arr" array.

    return getRandomElement //Return the random element.
}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
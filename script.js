// Assignment Code
var generateBtn = document.querySelector("#generate");

var uppercaseCharCodes = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowercaseCharCodes = "abcdefghijklmnopqrstuvwxyz"
var numberCharCodes = "0123456789"
var symbolsCharCodes = "~!@#$%^&*?"

function generatePassword(){
    var allCharacters = [];
    var resultPassword = "";
    var confirmLength = (prompt("How many characters would you like your password to be?"));

    if(confirmLength <8 || confirmLength > 128){
        alert("Please make password between 8-128 characters. Try again!")
        return;
    }

    if (confirmLength){
        if(confirm("Do you want uppercase characters?")){
            allCharacters.push(uppercaseCharCodes);
        }
        if(confirm("Do you want lowercase characters?")){
            allCharacters.push(lowercaseCharCodes);
        }
        if(confirm("Do you want number characters?")){
            allCharacters.push(numberCharCodes);
        }
        if(confirm("Do you want symbol characters?")){
            allCharacters.push(symbolsCharCodes);
        }
        if(allCharacters.length===0){
            alert("At least one character type must be selected. Try again!");
            return;
        } else {
            for(var i = 0; i < confirmLength; i++){
                var randomCharType = Math.floor(Math.random()*allCharacters.length);
                const selectedCharType = allCharacters[randomCharType];
                var randomChar = Math.floor(Math.random()*selectedCharType.length);
                resultPassword += selectedCharType[randomChar];
            }
        }
    }
    document.getElementById("password").textContent = resultPassword
    return resultPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

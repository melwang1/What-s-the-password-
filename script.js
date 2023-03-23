// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  var passwordlength = parseInt(prompt("Enter Password Length"))
  var username = prompt("Enter Username")
  if(passwordlength< 8 || passwordlength>128 || isNaN(passwordlength)){
    return "Please enter password length between 8-128"
  }
  console.log(passwordlength,username)
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

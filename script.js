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
  var todoUpper =  confirm("Do you like to have Uppercase letters")
  var todoLower =  confirm("Do you like to have Lowercase letters")
  var todoNumber =  confirm("Do you like to have Numbers")
  var todoSymbols =  confirm("Do you like to have Symbols")
  var validList = []
  if(todoUpper){
    validList = validList+"ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  if(todoLower){
    validList = validList+"abcdefghijklmnopqrstuvwxyz"
  }
  if(todoNumber){
    validList = validList+"0123456789"
  }
  if(todoSymbols){
    validList = validList+"!@#$%^&*()-+=_"
  }
  if(validList.length === 0){
    return "Please select one option min:1 max:4"
  }
  console.log(passwordlength,username,validList)
  var password ="";
 for(let i=0;i<passwordlength;i++){
  var index = Math.floor(Math.random() * validList.length)
  password  += validList[index]
 }
 return password
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

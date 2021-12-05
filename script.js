const input = document.getElementById("Password");
const button = document.querySelector("button");
const error = document.querySelector('p');

function strLength(str) {
 return (str.length > 5) ? true : false 
}

function checkStr(str) {
  let upperCaseCounter = 0
  let lowerCaseCounter = 0

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      upperCaseCounter++
    }
    if (str[i] === str[i].toLowerCase()) {
      lowerCaseCounter++
    }
  }
  if (lowerCaseCounter > 0 && upperCaseCounter > 0) {
    return true
  }
  return false
};

function output() {
  if (strLength(input.value)==true && checkStr(input.value)==true) {
    error.innerText = "Password Valid"
  }
  else {error.innerText = "Password Invalid"}
}

button.addEventListener('click', output);

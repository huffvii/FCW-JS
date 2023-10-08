let formForm = document.getElementById('formForm')

let result = document.getElementById('result')

formForm.addEventListener("submit", (e) => {
  e.preventDefault();

let textInput = document.getElementById('text-input')

textInput = textInput.value

let forward = textInput.replace(/ /g, "").toLowerCase().replace(/[^a-zA-Z0-9]/g, '')

console.log(forward)

let reversed = textInput.split("").reverse().join("").replace(/ /g, "").toLowerCase().replace(/[^a-zA-Z0-9]/g, '')

// .replace("/[a-z, ^0-9]/", "")

console.log(reversed)

  if(textInput == ""){
    alert("Please input a value")
  }else if(forward == reversed){
    result.innerText = `${textInput} is a palindrome`
  }else{
    result.innerText = `${textInput} is not a palindrome`
  }
})
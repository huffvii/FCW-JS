let formForm = document.getElementById('formForm');

let results = document.getElementById('results-div');

let userInput = document.getElementById('user-input');

formForm.addEventListener("submit", (e) => {
  e.preventDefault(); 


  let num = userInput.value.replace(/[^0-9]/g, "");
;

let result = false; //so that ternary works prop
	let formats = [
		/^\d\d\d\d\d\d\d\d\d\d$/,	// sets 5555555555
		/^\d\d\d-\d\d\d-\d\d\d\d/,// sets 555-555-5555
		/^\d\d\d\s\d\d\d\s\d\d\d\d/,// sets555 555 5555
		/^\(\d\d\d\)\d\d\d-\d\d\d\d/,// sets(555)555-5555
		/^\(\d\d\d\)\s\d\d\d-\d\d\d\d/,// sets(555) 555-5555
		/^1\d\d\d\d\d\d\d\d\d\d/,	// sets15555555555
		/^1\s\d\d\d\s\d\d\d\s\d\d\d\d/,//sets 1 555 555 5555
		/^1\s\d\d\d-\d\d\d-\d\d\d\d/,//sets 1 555-555-5555
		/^1\(\d\d\d\)\d\d\d-\d\d\d\d/,//sets 1(555)555-5555
		/^1\s\(\d\d\d\)\s\d\d\d-\d\d\d\d/,//sets 1 (555) 555-5555
	]; 

	result = formats.some(reg => reg.test(userInput.value));
console.log(result)
   

  /*const isReal = (userInput) => regex.test((userInput.value))
  console.log(isReal())*/

if(num === ''){
    alert("Please provide a phone number");
    return;
  }
  


  results.innerText = result ? `Valid US number: ${userInput.value}`:`Invalid US number: ${userInput.value}`;

	document.getElementById('clear-btn')
  
});
const clearEm = () => results.innerText = ''
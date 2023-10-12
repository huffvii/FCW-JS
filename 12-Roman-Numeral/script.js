let formForm = document.getElementById('formForm');

let output = document.getElementById('output');

let number = document.getElementById('number');
formForm.addEventListener("submit", (e) => {
  e.preventDefault();

const num = Number(number.value);


function convertToRoman(num) { 
  if(num < 1){ return "";}
  if(num >= 1000){return "M" + convertToRoman(num - 1000);}
  if(num >= 900){return "CM" + convertToRoman(num - 900);}
  if(num >= 500){return "D" + convertToRoman(num - 500);}
  if(num >= 400){return "CD" + convertToRoman(num - 400);}
  if(num >= 100){return "C" + convertToRoman(num - 100);}
  if(num >= 90){return "XC" + convertToRoman(num - 90);}
  if(num >= 50){return "L" + convertToRoman(num - 50);}
  if(num >= 40){ return "XL" + convertToRoman(num - 40);}
  if(num >= 10){ return "X" + convertToRoman(num - 10);}
  if(num >= 9){ return "IX" + convertToRoman(num - 9);}
  if(num >= 5){ return "V" + convertToRoman(num - 5);}
  if(num >= 4){ return "IV" + convertToRoman(num - 4);}
  if(num >= 1){ return "I" + convertToRoman(num - 1);} 
}


  console.log(num)
   if(num === 0){
     output.innerText = ('Please enter a valid number')
     return;
   }else if(num < 0){
     output.innerText = "Please enter a number greater than or equal to 1";
     return;
   }else if(num > 3999){
     output.innerText = 'Please enter a number less than or equal to 3999';
     return;
   }else{
    output.innerText = convertToRoman(num);
    number.value = 0
  }


})
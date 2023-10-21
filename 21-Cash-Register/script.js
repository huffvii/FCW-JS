let price = 4.76;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];

let drawer = document.getElementById;('drawer'); //cid
let priceDisplay = document.getElementById('price');
const changeDue = document.getElementById('change-due');
const cash = document.getElementById('cash');
const purchaseBtn = document.getElementById('purchase-btn');
const priceScreen = document.getElementById('price-screen');
const cashDrawerDisplay = document.getElementById('cash-drawer-display');

const formatResults = (status, change) => {
  changeDue.innerHTML = `<p>Status: ${status}</p>`;
  change.map(
    m => (changeDue.innerHTML += `<p>${m[0]}: $${m[1]}</p>`)
  );
  return;
};

const checkCashRegister = () => {
  if (Number(cash.value) < price) {
    alert('Customer does not have enough money to purchase the item');
    cash.value = '';
    return;
  }

  if (Number(cash.value) === price) {
    changeDue.innerHTML =
      '<p>No change due - customer paid with exact cash</p>';
    cash.value = '';
    return;
  }

  let difference = Number(cash.value) - price;
  let reversedCid = [...cid].reverse();
  let units = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
  let result = { status: 'OPEN', change: [] };
  let totalCID = parseFloat(
    cid.map(total => total[1]).reduce((prev, curr) => prev + curr).toFixed(2)
  );

  if (totalCID < difference) {
    return (changeDue.innerHTML = '<p>Status: INSUFFICIENT_FUNDS</p>');
  }

  if (totalCID === difference) {
    result.status = 'CLOSED';
  }

  for (let i = 0; i <= reversedCid.length; i++) {
    if (difference >= units[i] && difference > 0) {
      let count = 0;
      let total = reversedCid[i][1];
      while (total > 0 && difference >= units[i]) {
        total -= units[i];
        difference = parseFloat((difference -= units[i]).toFixed(2));
        count++;
      }
      if (count > 0) {
        result.change.push([reversedCid[i][0], count * units[i]]);
      }
    }
  }
  if (difference > 0) {
    return (changeDue.innerHTML = '<p>Status: INSUFFICIENT_FUNDS</p>');
  }

  formatResults(result.status, result.change);
  updateUI(result.change);
};

const checkResults = () => {
  if (!cash.value) {
    return;
  }
  checkCashRegister();
};

const updateUI = change => {
  const names = {
    PENNY: 'Pennies',
    NICKEL: 'Nickels',
    DIME: 'Dimes',
    QUARTER: 'Quarters',
    ONE: 'Ones',
    FIVE: 'Fives',
    TEN: 'Tens',
    TWENTY: 'Twenties',
    'ONE HUNDRED': 'Hundreds'
  };
  // Update cid if change is passed in
  if (change) {
    change.forEach(changeArr => {
      const targetArr = cid.find(cidArr => cidArr[0] === changeArr[0]);
      targetArr[1] = parseFloat((targetArr[1] - changeArr[1]).toFixed(2));
    });
  }

  cash.value = '';
  priceDisplay.textContent = `Total: $${price}`;
  drawer.innerHTML = `<p><strong>Change in drawer:</strong></p>
    ${cid
      .map(m => `<p>${names[m[0]]}: $${m[1]}</p>`)
      .join('')}  
  `;
};

purchaseBtn.addEventListener('click', checkResults);

cash.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    checkResults();
  }
});

updateUI();


// function convertToChange(difference) { 
//   if(num < 1){ return "";}
//   if(difference >= 100 && cid[8] > 0){
//     return "C" 
    
//     + convertToChange(difference - 100);
//   }
//   if(num >= 90){return "XC" + convertToRoman(num - 90);}
//   if(num >= 50){return "L" + convertToRoman(num - 50);}
//   if(num >= 40){ return "XL" + convertToRoman(num - 40);}
//   if(num >= 10){ return "X" + convertToRoman(num - 10);}
//   if(num >= 9){ return "IX" + convertToRoman(num - 9);}
//   if(num >= 5){ return "V" + convertToRoman(num - 5);}
//   if(num >= 4){ return "IV" + convertToRoman(num - 4);}
//   if(num >= 1){ return "I" + convertToRoman(num - 1);} 
// }
let calculation = localStorage.getItem('calculation') || '';
document.querySelector('.displayCalculation').innerHTML = calculation;

function updateCalculation(number) {
  calculation += `${number}`;
  localStorage.setItem('calculation',calculation);
  document.querySelector('.displayCalculation').innerHTML = calculation;
}

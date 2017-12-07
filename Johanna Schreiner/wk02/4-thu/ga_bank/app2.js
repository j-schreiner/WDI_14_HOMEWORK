console.log("GA Bank")

var savingsInput = document.querySelector('.savingsInput')
var checkingInput = document.querySelector('.checkingInput')
var savingsSpan = document.querySelector('.savingsSpan')
var checkingSpan = document.querySelector('.checkingSpan')

// SAVINGS //

var withdrawSavingsBtn = document.querySelector('.withdrawSavings')
var depositSavingsBtn = document.querySelector('.depositSavings')

var withdrawSavings = function(){
  var balance = Number(savingsInput.value) - Number(savingsInput.value)
  savingsSpan.textContent = balance
}

var depositSavings = function(){
  var balance = Number(savingsInput.value) + Number(savingsInput.value)
  savingsSpan.textContent = balance
}

withdrawSavingsBtn.addEventListener('click', withdrawSavings)
depositSavingsBtn.addEventListener('click', depositSavings)

// CHECKING //

var withdrawCheckingBtn = document.querySelector('.withdrawChecking')
var depositCheckingBtn = document.querySelector('.depositChecking')

var withdrawChecking = function(){
  var balance = Number(checkingInput.value) - Number(checkingInput.value)
  checkingSpan.textContent = balance
}

var depositChecking = function(){
  var balance = Number(checkingInput.value) + Number(checkingInput.value)
  checkingSpan.textContent = balance
}

withdrawCheckingBtn.addEventListener('click', withdrawChecking)
depositCheckingBtn.addEventListener('click', depositChecking)


// CALCULATOR EXERCISE //

// var num1Input = document.querySelector('.num1')
// var num2Input = document.querySelector('.num2')
// var span = document.querySelector('span')
// var addBtn = document.querySelector('button')

// var add = function(){
//   var result = Number(num1Input.value) + Number(num2Input.value)
//   span.textContent = result
// }

// addBtn.addEventListener('click', add)





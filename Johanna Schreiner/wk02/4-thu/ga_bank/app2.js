console.log("GA Bank")





var savingsInput = document.querySelector('.savingsInput')
var savingsSpan = document.querySelector('.savingsSpan')


// SAVINGS //

var withdrawSavingsBtn = document.querySelector('.withdrawSavings')
var depositSavingsBtn = document.querySelector('.depositSavings')

var savingsAccount = 0

var withdrawSavings = function(){
  savingsAccount = savingsAccount - Number(savingsInput.value)
  savingsSpan.textContent = savingsAccount
}

var depositSavings = function(){
  savingsAccount = savingsAccount + Number(savingsInput.value)
  savingsSpan.textContent = savingsAccount
}

withdrawSavingsBtn.addEventListener('click', withdrawSavings)
depositSavingsBtn.addEventListener('click', depositSavings)



// CHECKING //

var checkingInput = document.querySelector('.checkingInput')
var checkingSpan = document.querySelector('.checkingSpan')

var checkingAccount = 0

var withdrawCheckingBtn = document.querySelector('.withdrawChecking')
var depositCheckingBtn = document.querySelector('.depositChecking')

var withdrawChecking = function(){
  checkingAccount = checkingAccount - Number(checkingInput.value)
  checkingSpan.textContent = checkingAccount
}

var depositChecking = function(){
  checkingAccount = checkingAccount + Number(checkingInput.value)
  checkingSpan.textContent = checkingAccount
}

withdrawCheckingBtn.addEventListener('click', withdrawChecking)
depositCheckingBtn.addEventListener('click', depositChecking)






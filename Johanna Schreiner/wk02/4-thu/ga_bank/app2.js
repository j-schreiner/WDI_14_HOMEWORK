console.log("GA Bank")

// SAVINGS //

var savingsInput = document.querySelector('.savingsInput')
var savingsSpan = document.querySelector('.savingsSpan')

var savingsAccount = 0

var withdrawSavingsBtn = document.querySelector('.withdrawSavings')
var depositSavingsBtn = document.querySelector('.depositSavings')


var withdrawSavings = function(){
  savingsAccount = savingsAccount - Number(savingsInput.value)
  if(savingsAccount > 0){
    savingsSpan.textContent = savingsAccount
  } else{
    savingsAccount = 0
    savingsSpan.textContent = 0
    // make background color red
  }
}

var depositSavings = function(){
  savingsAccount = savingsAccount + Number(savingsInput.value)
  if(savingsAccount > 0){
    savingsSpan.textContent = savingsAccount
  } 

  else{
      savingsAccount = 0
      savingsSpan.textContent = 0
      // make background color red
  }
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
  if(checkingAccount > 0){
    checkingSpan.textContent = checkingAccount 
  } else if(isNaN(checkingAccount)){
      checkingAccount = 0
      checkingSpan.textContent = 0
      alert("please enter a valid amount")
    } else{
      checkingAccount = 0
      checkingSpan.textContent = 0
      // make background color red
      }
}

var depositChecking = function(){
  checkingAccount = checkingAccount + Number(checkingInput.value)
  if(checkingAccount > 0){
    checkingSpan.textContent = checkingAccount
  } else if(isNaN(checkingAccount)){
      checkingAccount = 0
      checkingSpan.textContent = 0
      alert("please enter a valid amount")
    } else{
      checkingAccount = 0
      checkingSpan.textContent = 0
      // make background color red
      }  
}

withdrawCheckingBtn.addEventListener('click', withdrawChecking)
depositCheckingBtn.addEventListener('click', depositChecking)

// OVERDRAFT PROTECTION //

// var overdraftProtect = function(){

// }


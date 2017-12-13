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
    savingsInput.style.backgroundColor = 'gray'
  } else if(isNaN(savingsAccount)){
      savingsAccount = 0
      savingsSpan.textContent = 0
      savingsInput.style.backgroundColor = 'red'
      alert("please enter a valid amount")
    } else{
        savingsAccount = 0
        savingsSpan.textContent = 0
        savingsInput.style.backgroundColor = 'red'
      }
}

var depositSavings = function(){
  savingsAccount = savingsAccount + Number(savingsInput.value)
  if(savingsAccount > 0){
    savingsSpan.textContent = savingsAccount
    savingsInput.style.backgroundColor = 'gray'
  } else if(isNaN(savingsAccount)){
      savingsAccount = 0
      savingsSpan.textContent = 0
      savingsInput.style.backgroundColor = 'red'
      alert("please enter a valid amount")
    } else{
        savingsAccount = 0
        savingsSpan.textContent = 0
        savingsInput.style.backgroundColor = 'red'
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
      checkingInput.style.backgroundColor = 'gray'
      alert("please enter a valid amount")
    } else{
      checkingAccount = 0
      checkingSpan.textContent = 0
      checkingInput.style.backgroundColor = 'red'
      }
}

var depositChecking = function(){
  checkingAccount = checkingAccount + Number(checkingInput.value)
  if(checkingAccount > 0){
    checkingSpan.textContent = checkingAccount
    checkingInput.style.backgroundColor = 'gray'
  } else if(isNaN(checkingAccount)){
      checkingAccount = 0
      checkingSpan.textContent = 0
      checkingInput.style.backgroundColor = 'red'
      alert("please enter a valid amount")
    } else{
      checkingAccount = 0
      checkingSpan.textContent = 0
      checkingInput.style.backgroundColor = 'red'
      }  
}

withdrawCheckingBtn.addEventListener('click', withdrawChecking)
depositCheckingBtn.addEventListener('click', depositChecking)

// OVERDRAFT PROTECTION //

// var overdraftProtect = function(){

// }


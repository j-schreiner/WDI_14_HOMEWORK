class ATM {
  constructor(accountType) {
    this.accountType = accountType
    this.money = 0
    this.transactionHistory = []
  }

  withdraw(amount) {
    this.transactionHistory.push(`withdrew ${amount}`)
    return this.money -= amount
  }

  deposit(amount) {
    this.transactionHistory.push(`deposited ${amount}`)
    return this.money += amount
  }

  showBalance() {
    return `balance: $${this.money}; ${this.transactionHistory.join(', ')}.`
  }
}
let savings = new ATM("savings")

savings.deposit(200)
savings.withdraw(50)
console.log(savings.showBalance())

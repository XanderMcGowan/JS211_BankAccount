class BankAccount {
  constructor (_accountNumber, _owner){
    this.accountNumber = _accountNumber;
    this.owner = _owner;
  }
  transactions = []

  balance()
  {
    
    let currentBalance = 0
    for (let i = 0; i < this.transactions.length; i++)
    {
      currentBalance += this.transactions[i].amount

    }
    console.log("Current Balance: " + currentBalance)
    return currentBalance

  }
  
  deposit(_amount)
  {
    if (_amount <= 0){
      console.log("Cannot Deposit Negative/Null Amount")
      return
    } else {
      let currDeposit = new Transaction(_amount, this.owner)
      this.transactions.push(currDeposit)
      this.balance()
    }
  }

  charge(_amount, _payee)
  {
    if (this.balance() <= 0) {
      console.log("Insufficient Funds")
      return
    } else {
      let currCharge = new Transaction(_amount * -1, _payee)
      this.transactions.push(currCharge)
      this.balance()
    }
  }  


}

class Transaction {
  constructor (_amount, _payee){
    this.amount = _amount;
    this.payee = _payee;

    const d = new Date()
    this.date = `${d.getMonth()} - ${d.getDate()} - ${d.getFullYear()}`
  }
  date
}

const main = new BankAccount("1234", "bob")
console.log(main)
main.deposit(100)
main.charge(100, 'pizza')
console.log(main.transactions)
main.balance()
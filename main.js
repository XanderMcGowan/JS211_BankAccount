class BankAccount {
    constructor (_accountNumber, _owner){
      this.accountNumber = _accountNumber;
      this.owner = _owner;
    }
    transactions = []
  
    balance()
    {
      
    }
    
    deposit(amt)
    {
      
    }
  
    charge(payee, amt) 
    {
      
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
  console.log(main.transactions.length)
  
  const trans = new Transaction (100, "jerry")
  console.log(trans)
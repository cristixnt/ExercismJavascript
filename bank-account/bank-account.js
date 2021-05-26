//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  balance;
  status;
  constructor() {
    this.balance = 0;
    this.status = false;
  }

  open() {
    if(this.status) throw new ValueError();
    this.status = true;
  }

  close() {
    if(!this.status) throw new ValueError();
    this.balance = 0;
    this.status = false;
  }

  deposit(amount) {
    if(amount < 0 || !this.status) throw new ValueError();
    this.balance += amount;
  }

  withdraw(amount) {
    if(!this.status || this.balance < amount || amount < 0) throw new ValueError();
    this.balance -= amount;
  }

  get balance() {
    if(!this.status) {
      throw new ValueError();
    }
    return this.balance;
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}

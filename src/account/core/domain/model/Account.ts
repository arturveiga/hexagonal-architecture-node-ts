import ErrorCore from "./ErrorCore";

class Account {
  private number: number;
  private balance: number;
  private accountHolder: string;

  constructor(number = 0, balance = 0, accountHolder = "Not informed") {
    this.number = number;
    this.balance = balance;
    this.accountHolder = accountHolder;
  }

  public credit(creditAmount: number) {
    if (creditAmount <= 0) {
      ErrorCore.required("Credit amount");
    }
    this.balance += creditAmount;
  }

  public debit(debitAmount: number) {
    if (debitAmount <= 0) {
      ErrorCore.required("Debit amount");
    }
    if (debitAmount > this.balance) {
      ErrorCore.insufficientFunds();
    }

    this.balance -= debitAmount;
  }

  public getBalance(): number {
    return this.balance;
  }
}

export default Account;

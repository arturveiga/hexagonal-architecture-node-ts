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
    if (!creditAmount) {
      ErrorCore.required("Credit amount");
    }
    if (creditAmount <= 0) {
      ErrorCore.required("Credit amount");
    }
    this.balance += creditAmount;
  }

  public debit(debitAmount: number) {
    if (!debitAmount) {
      ErrorCore.required("Debit amount");
    }
    if (debitAmount <= 0) {
      ErrorCore.required("Debit amount");
    }
    if (this.balance - debitAmount > 0) {
      ErrorCore.insufficientFunds();
    }

    this.balance -= debitAmount;
  }
}

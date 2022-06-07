import {Account} from "./Account";

export class SavingsAccount extends Account {
    private _currentMonthlyWithdrawals: number;
    private _maxMonthlyWithdrawals: number;
    private _interestRate: number;

    constructor(memberId: number, startingBalance: number) {
        super(memberId, startingBalance);
        this._currentMonthlyWithdrawals = 0;
        this._maxMonthlyWithdrawals = 3;
        this._interestRate = 2
    }

    public withdraw(amount: number): void {
        if(this._currentMonthlyWithdrawals === this._maxMonthlyWithdrawals) {
            console.log(`Max monthly withdrawal limit has been reached. Please wait until the next month`)
            return;
        }
        if(this._balance < amount) {
            console.log('Insufficient funds')
            return;
        }
        this._balance -= amount;
        this._currentMonthlyWithdrawals++;
        console.log(`${amount}$ withdrawn from account`)
    }

    public addMonthlyInterest(): void {
        this._balance += this._balance * (this._interestRate / 100);
        console.log(`Monthly interest of ${this._interestRate}% has been added`)
    }
}
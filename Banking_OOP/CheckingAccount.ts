import {Account} from "./Account";

export class CheckingAccount extends Account{
    private _maxWithdrawalAmount: number;

    constructor(memberId: number, startingBalance: number) {
        super(memberId, startingBalance);
        this._maxWithdrawalAmount = 250;
    }

    public withdraw(amount: number): void {
        if(amount > 250) {
            console.log(`Amount exceeds the daily withdrawal limit ${this._maxWithdrawalAmount}`)
            return;
        }
        if(this._balance < amount) {
            console.log('Insufficient funds')
            return;
        }
        this._balance -= amount;
        console.log(`${amount}$ withdrawn from account`)
    }
}
import {SavingsAccount} from "./SavingsAccount";
import {CheckingAccount} from "./CheckingAccount";

export class BankMember {
    private _name: string
    private _memberId: number;
    private _savingsAccount!: SavingsAccount;
    private _checkingAccount!: CheckingAccount;

    constructor(name: string) {
        this._name = name;
        this._memberId = this.generateId()
    }

    public get memberId() {
        return this._memberId;
    }

    public getSavingsBalance(): number {
        return this._savingsAccount.balance;
    }

    public getCheckingBalance(): number {
        return this._checkingAccount.balance;
    }

    public createSavingsAccount(startingBalance: number): void {
        if(this._savingsAccount !== undefined) {
            console.log(`Member ${this._name} already owns a savings account`)
            return;
        }
        this._savingsAccount = new SavingsAccount(this._memberId, startingBalance);
    }
    public createCheckingAccount(startingBalance: number): void {
        if(this._checkingAccount !== undefined) {
            console.log(`Member ${this._name} already owns a checking account`)
            return;
        }
        this._checkingAccount = new CheckingAccount(this._memberId, startingBalance);
    }

    public depositToSavings(amount: number): void {
        this._savingsAccount.deposit(amount);
    }

    public depositToChecking(amount: number): void {
        this._checkingAccount.deposit(amount);
    }

    public withdrawFromSavings(amount: number): void {
        this._savingsAccount.withdraw(amount);
    }

    public withdrawFromChecking(amount: number): void {
        this._checkingAccount.withdraw(amount);
    }

    private generateId(): number{
        const possibilities = '1234567890';
        let generated = '';
        for(let i = 0; i < 6; i++){
            generated += possibilities.charAt(Math.random() * possibilities.length);
        }
        return parseInt(generated);
    }
}
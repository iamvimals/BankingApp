export abstract class Account {
    protected _memberId: number;
    protected _balance: number;

    protected constructor(memberId: number, startingBalance: number) {
        this._memberId = memberId;
        this._memberId = memberId;
        this._balance = startingBalance;
    }

    public get objectReference(): Account {
        return this;
    }
    public get id(): number {
        return this._memberId;
    }

    public get balance(): number {
        return this._balance
    }

    public deposit(amount: number): void {
        this._balance += amount;
        console.log(`${amount}$ deposited to account`)
    }

    public abstract withdraw(amount: number): void;
}
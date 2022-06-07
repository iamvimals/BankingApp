import {BankMember} from './BankMember'
import {SavingsAccount} from "./SavingsAccount";

// Member creation
const kenobi = new BankMember('Obi-wan Kenobi');

// New Savings Account creation
kenobi.createSavingsAccount(5000)
console.log(`Savings Account created with balance ${kenobi.getSavingsBalance()}$`)

kenobi.depositToSavings(500)
console.log(`Outstanding Balance: ${kenobi.getSavingsBalance()}`)

kenobi.withdrawFromSavings(300)
console.log(`Outstanding Balance: ${kenobi.getSavingsBalance()}`)

kenobi.withdrawFromSavings(200)
console.log(`Outstanding Balance: ${kenobi.getSavingsBalance()}`)

kenobi.withdrawFromSavings(100)
console.log(`Outstanding Balance: ${kenobi.getSavingsBalance()}`)

kenobi.withdrawFromSavings(50)
console.log(`Outstanding Balance: ${kenobi.getSavingsBalance()}`)

console.log('===================================================')
// New Checking Account creation
kenobi.createCheckingAccount(5000)
console.log(`Checking Account created with balance ${kenobi.getCheckingBalance()}$`)

kenobi.depositToChecking(500)
console.log(`Outstanding Balance: ${kenobi.getCheckingBalance()}`)

kenobi.withdrawFromChecking(300)
console.log(`Outstanding Balance: ${kenobi.getCheckingBalance()}`)

console.log('===================================================')

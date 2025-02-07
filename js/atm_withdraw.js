function atmWithdrawal(balance, amount, pin, enteredPin){
    if(enteredPin==pin){
        if(amount>balance){
            return "Insufficient funds";
        }
        if(amount%100==0){
            balance-=amount;
            return `Withdraw successful! Remaining balance ${balance}`;
        }
        else{
            return "Enter amount in multiples of 100";
        }
    }
    else{
        return "Incorrect pin";
    }
}
console.log(atmWithdrawal(10000,5000,12345,12345));


type account = {
    money:number,
    deposit:(value:number)=> void
}

let bankAccount : account= {
    money: 2000,
    deposit(value:number) {
        this.money += value;
    }
};

let myself =  {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);

console.log(myself);

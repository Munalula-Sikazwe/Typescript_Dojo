type account = {
    money:number,
    deposit:(value:number)=> void
}
type me = {
    name:string;
    bankAccount:account;
    hobbies:Array<string>
}
 
let bankAccount : account= {
    money: 2000,
    deposit(value:number) {
        this.money += value;
    }
};

let myself =  {
    name: "Munalula Sikazwe",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);

console.log(myself);

// string
let myName = 'Munalula';
// myName = 23; will generate and error because typescript infers the type from initialized value.
 let myNumber = 23;
 /// same goes for myNumber = "23";
function  multiply(firstNumber:number,secondNumber:number):number{
 return firstNumber * secondNumber;
}
console.log(multiply(2,5));
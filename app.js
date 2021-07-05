// string
var myName = 'Munalula';
// myName = 23; will generate and error because typescript infers the type from initialized value.
var myNumber = 23;
/// same goes for myNumber = "23";
function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}
console.log(multiply(2, 5));
var greet = function (name) {
    console.log("Hello " + name);
};
greet("Munalula");

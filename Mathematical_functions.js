var Mathematical_functions;
(function (Mathematical_functions) {
    Mathematical_functions.calculate_circumference = function (radius) {
        return 2 * Math.PI * radius;
    };
})(Mathematical_functions || (Mathematical_functions = {}));
console.log(Mathematical_functions.calculate_circumference(3));

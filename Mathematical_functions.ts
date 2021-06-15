namespace  Mathematical_functions{
   export let calculate_circumference = (radius:number):number=>{
        return 2 * Math.PI * radius;
    }
}

console.log(Mathematical_functions.calculate_circumference(3));
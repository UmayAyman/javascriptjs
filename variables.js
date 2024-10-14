//let fullname = "Ayman";
//let age = 20;
//let x = null;
//console.log(fullname, age, x);

//let variable
let age = 20;
age = 24;
age = 40;
console.log (age);
//OR
let a;
console.log (a);
//OR
let b;
b = 20;
console.log(b);
//OR
{
    let x = 5;
    console.log (x);  //can't define x again because we're in block
}
{
    let x = 30;
    console.log (x);  //we have to make different block if we want to redefine value
}

//var variable
var name = "aiman";    //we can use var anywhere in the code (global scope)
name = "aiman";
var name = "ali";
console.log (name);

//const variable
const PI = 3.14;
console.log (PI);
//OR
//const c;
//console.log(c);  //error! const must initialzie with some value
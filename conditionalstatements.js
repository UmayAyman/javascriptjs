//Arthemetic operations
//let a = 5;
//let b = 2;

//console.log ("a = ", a , " & b = ", b );
//console.log ("a + b = ", a + b);
//console.log ("a - b = ", a - b);
//console.log ("a * b = ", a * b);
//console.log ("a / b = ", a / b);
//console.log ("a % b = ", a % b);    //remainder
//console.log ("a ** b = ", a ** b);  //5^2

//Unary Operator
//let x = 5;
//let y = 2;

//console.log ("a = ", a , " & b = ", b );
//a = a + 1; //or we can write a++ instead of a = a + 1;
//console.log ("a = " , a); //6

//a = a - 1; //or we can write a-- instead of a = a - 1;
//console.log ("a = " , a); //4

//let z = 5;
//let q = 2;

//console.log ("z = ", z , " & q = ", q );
//console.log ("++z = " , ++z); //means it will simply print value and then change that after that we don't have to write console.log ("z = ", z); again
//console.log ("z++ = " , z++); //means first it will change value than print
//console.log ("z = " , z);

//Assignment operators
//a += 4; // a = a + 4;
//a -= 4; // a = a - 4;
//a *= 4; // a = a * 4;
//a /= 4; // a = a / 4;
//a %= 4; // a = a % 4;
//a **= 4; // a = a ** 4;

//Comparison operator
// == (equal to)
// != (not equal to)
// === (equal to and type)
// !== (not equal to and type)
// >, >=, <, <= ( greater than, less than, greater than or equal to, less than or equal to)

//Logical Operators
// && (AND)
// || (OR)
// ! (logical NOT)



//CONDITIONAL STATEMENTS

//IF
let age = 5;
if (age >= 18){
    console.log("you can vote");
}
if (age < 18){
    console.log("you cannot vote");
}
//OR
//let mode = "dark";
//let color;
//if (mode === "dark"){
//    color = "black";
//}
//if (mode === "light"){
//    color = "white";
//}
//console.log(color);

//IF ELSE
let mode = "white";
let color;
if (mode === "dark"){
    console.log(color = "black");
}
else {
    console.log(color = "white");
}
//OR
let num = 10;
if (num % 2 === 0){
    console.log (num, "is even");
}
else{
    console.log (num, "is odd");
}

//ELSE IF
let percentage = 70;
let student;

if (percentage >= 80) {
    student = "A grade";
}
else if (percentage >= 60) {
    student = "B grade";
}
else if (percentage >= 40) {
    student = "C grade";
}
else {
    student = "Fail";
}
console.log(student);

//TERNARY OPERATOR SAME AS IF ELSE
let height = 5.8;
let result = height >=6 ? "tall" : "average"; //console.log ("tall") : console.log ("average");
console.log (result);

//SWITCH CONDITION
const day = 4;
        switch (day){
            case 0:            //case 0: case 1: case 2: in case we want to print same value of diff cases
                console.log ("Today is Monday");
            break;

            case 1:
                console.log ("Today is Tuesday");
            break;

            case 2:
                console.log ("Today is Wednesday");
            break;

            case 3:
                console.log ("Today is Thursday");
            break;

            case 4:
                console.log ("Today is Friday");
            break;

            case 5:
                console.log ("Today is Saturday");
            break;

            case 6:
                console.log ("Today is Sunday");
            break;
        default:
            console.log ("Enter Valid Day");
        }
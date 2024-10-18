function myFun(msg){
    //parameter -> input
    console.log(msg);
}
myFun("Hello world"); //argument

//calculate sum
//function sum(x, y){
//    console.log(x + y);
//}
//sum(5,10);   //calling the function
//OR
function sum(x, y) {   //x and y are local variables means they are only in block of code
    let s = x + y;  // Store the sum in the variable s
    return s;       // Return the value of s
}
let result = sum(20, 10);
console.log(result);

//ARROW FUNCTION
function divide(a,b){
    return(a/b);
}
const arrowdivide = (a,b) => {       //storing function inside a variable but here arrowdivide is not a variable, it's a function
    console.log(a/b);
}
arrowdivide(5, 10);   //calling function

//multiplication
function mul(a,b){
    return(a*b);
}
const arrowMul = (a , b) => {
    console.log(a*b);   //we can use return here like return a*b;
}
arrowMul(10, 2);


//Practice Questions
function countVowels(str){
    let count = 0;
    for (const char of str){
        if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u"){
            count++;
        }
        console.log(char);
    }
    console.log("number of vowles: ", count);
}
countVowels("hello");

//Arrow Function
let countVow = (str) => {
    let count = 0;
    for (const char of str){
        if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u"){
            count++;
        }
        console.log(char);
    }
    console.log("number of vowles: ", count);
}
countVowels("helloworld");

//forEach in array (only used for arrays)
let arr = [1, 2, 3, 4 ,5];
//arr.forEach(function printVal(val){
//    console.log(val);
//});
arr.forEach((val) =>{      //arrow function
    console.log(val);
});

let cities = ["rwp", "isl", "multan"];
cities.forEach((value, idx, cities) =>{
    console.log(value, idx, cities);
})


//PRACTICE QUESTIONS
//let nums = [2, 3, 4, 5, 6];
//nums.forEach((num) =>{
//    console.log(num*num);    //OR num**2 for square
//})
//second method
let nums = [2, 3, 4, 5, 6];
let calcSquare = (num) => {
    console.log(num*num);
}
nums.forEach(calcSquare);


//using MAP FUNCTION to print array values
//let numbers = [67, 52, 89];
//numbers.map((numValue) => {   //numValue is a Callback function
//    console.log(numValue);
//})

//Saving new array with map method
let numbers = [67, 52, 89];
let newArr = numbers.map((numValue) => {   //numValue is a Callback function
    return numValue;   //or numValue*numValue
})
console.log(newArr);

//Filter Method
let array = [2, 3, 4, 5, 6, 7, 8];
let evenArr = array.filter((val) => {
    return val%2 === 0;     //!== for odd and val > 3 or val < 6 for any condtion we want
})
console.log(evenArr);

//Reduce method
let sumArr = [1, 2, 3, 4];
const output = sumArr.reduce((prev, curr) => {      //prev and curr are previous value and current value
    return prev + curr;
    //returning the largest number
    //return prev > curr ? prev : curr;
})
console.log(output);


//practice questions
let marks = [97, 64, 32, 49, 99, 96, 86];
let toppers = marks.filter((val) => {
    return val>90;
})
console.log(toppers);

//q2
//let n = prompt("enter a number: ");
//let arrayy = [];
//for (let i = 1; i <= n; i++) {
//    arrayy[i - 1] = i;
//}
//console.log(arrayy);
//sum of values
//let summ = arrayy.reduce((res, curr) => {
//    return res + curr;
//})
//console.log(summ);
//factorial of values
//let factorial = arrayy.reduce((res, curr) => {
//    return res * curr;
//})
//console.log(factorial);
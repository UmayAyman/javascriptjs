//FOR LOOP
for (count = 1; count <=5; count++){
    console.log("hello world");     //5 times execute
}
console.log("loop has ended");
//pt 2
//for (i = 1; i <= 5; i++){      //can't access variables outside of loop, they only work inside of loop
//    console.log ("i = ", i);
//}
//console.log (i);  //i is undefined, if we write var instead of let in that way it can print value outisde of loop


//Sum of 1 to 5
//let sum = 0;
//for (let i = 1; i <= 5; i++){
//    sum = sum + i;
//}
//console.log("sum = ", sum);

//Sum of 1 to n
let sum = 0;
n = 6;
for (let i = 1; i <= n; i++){
    sum = sum + i;
}
console.log("sum = ", sum);


//WHILE LOOP
let i = 1; //initialization condition
while (i <= 10 ){      //stopping condition
    console.log("i = ", i);            //if we want to print anything here will write console.log("hello");
    i++;   //updation condition
}


//DO WHILE LOOP
let x = 20; //initialization condition
do {
    console.log("hello");
    x++;   //updation condition
} while (x <= 10);     //stopping condition
//OR
//let x = 1; //initialization condition
//do {
//    console.log("i=",i);
//    i++;   //updation condition
//} while (i <= 5);     //stopping condition


//FOR OF LOOP
//let str = "hello";
//for (let a of str){            //iterator - characters
//    console.log("a = ", a);
//}
//if we want to print the length of characters
let str = "hello";
let size = 0;
for (let a of str){
    console.log("a = ", a);
    size++;
}
console.log("string size = ", size); //5


//FOR IN LOOP
let student = {
    name: "ayman",
    age: 20,
    cgpa: 3.3,
    isPass: true
};

for (let key in student){
    console.log("key = ", key, "value = ", student[key]);
}

//for (let num = 0; num <= 100; num++){
//    console.log ("num = ", num);
//}
for (let num = 0; num <= 100; num++){
    if (num%2 === 0){          //even numbers (!== for odd numbers)
        console.log("num = ", num);
    }
}

//practice Q2
// Require the prompt-sync module
//const prompt = require('prompt-sync')();

// Initialize variables
//let gameNum = 25;
//let userNum = Number(prompt("Guess the game number: "));

// Game loop
//while (userNum != gameNum) {
//    userNum = Number(prompt("You entered the wrong number, guess again: "));
//}
//console.log("Congrats! You entered the right number.");




//STRINGS
let str1 = "helloworld";
let str2 = "Ayman";
str1.length;  //in terminal
console.log(str2[0]); //h

//template literals
let obj = {
    item: "pen",
    price: 10,
};
let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

let specialString = `this is a template literal`;
console.log(specialString);
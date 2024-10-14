//PRIMITIVE DATATYPES

//number datatypes
let age = 20;
let price = 1000;
console.log (age,price);

//string datatypes
let fullname = "john snow";
console.log (fullname);
console.log (typeof fullname);  //typeof (to check datatype)

//boolean datatype
isfollow = true;
console.log (isfollow);
console.log (typeof isfollow);

//undefined datatype
let x;
console.log (x);
console.log (typeof x);

//null datatype
let y = null;
console.log (y);
console.log (typeof y);

//bigint datatype
let a = BigInt(192387337029922228217);
console.log (a);
console.log (typeof a);

//symbol datatype
let b = BigInt (123);
let c = Symbol ('hello');
console.log (b);
console.log(typeof b);
console.log (c);
console.log(typeof c);

//NON-PRIMITIVE DATATYPES

//object
const student = {
    firstname : "aiman",
    age : 20,
    cgpa : 3.8,
    isPass : true,
};

student ["age"] = student ["age"] + 1; //if we want to change age
student ["name"] = "ali";

console.log(student.name); //console.log (student ["age"]); 0R student.age
//console.log(typeof student);
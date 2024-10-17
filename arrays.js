let names = ["ali", "ahmed", "haider"];
let marks = [80, 70, 95];
marks[2]= 99;      //updating index 2 marks but we can't update string 
console.log(marks[2]);
console.log(names);

//looping over an array
let heros = ["superman", "spiderman", "batman", "thor"];
for (let i = 0; i < heros.length; i++){
    console.log (heros[i]);
}            //we can use for of loop

//for of
let cities = ["Rwp", "Isl", "Quetta", "Multan"];
for (let city of cities){
    console.log(city);    //city.toUpperCase() means capital
}

//Practice questions
let studentsMarks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let val of studentsMarks){
    sum+=val;
}
let avg = sum / studentsMarks.length;
//console.log(`avg marks of the class = ${avg}`);
console.log(avg);

//Q2
//let items = [250, 645, 300, 900, 50];
//for (let i = 0; i <items.length; i++){
//    let offer = items[i]/10;
//    items[i] -= offer;
//}
//console.log(items);

//Q3
let companies = ["blloomberg", "microsoft", "uber", "google", "ibm", "netflix"];
companies.shift();
//companies.splice(2, 1, "ola");
companies.push("amazon");
console.log(companies);
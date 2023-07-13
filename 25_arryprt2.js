const myheros1 =["Ram","Shyam","Jam"];
const myheros2 =["Sunil","Anil","Dilip"];

//push operator
// myheros1.push(myheros2)
// console.log(myheros1); 

//concatenate operator
// const allHeros = myheros1.concat(myheros2)
// console.log(allHeros);

//spread operator = most used for adding two arrays 
const all_new_Heros =[...myheros1,...myheros2]
console.log(all_new_Heros );
//Flat method 
const another_arry =[1,2,3,[4,5,6],[7,8,9]]
const real_another_array =another_arry.flat(Infinity)
console.log(real_another_array);//    o/p 1,2,3,4,5,6,7,8,9
//isArray=
console.log(Array.isArray("Dilip"));
//from= Creates an array from an iterable object.
console.log(Array.from("Dilip"));
console.log(Array.from({name:"Dilip"}));
//of=Returns a new array from a set of elements.
let score1 =100;
let score2 =200;
let score3 =300;
console.log(Array.of(score1,score2,score3));
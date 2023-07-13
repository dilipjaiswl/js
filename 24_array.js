//Arrays

const myArray =[1,2,3,4,5];
const myHeros = ["saktiman,hanuman,ram"]

const newArray = new Array(1,2,3,4,5,6);
console.log(myArray[0]);

//Array Method 
// 1. push 
// 2. Pop
// 3. unshift
// 4. shift

myArray.push(6)    // add in the last element of array
console.log(myArray);
myArray.pop()      //remove last value from the array list.
console.log(myArray);
myArray.unshift(9) //add in the first element of array.
console.log(myArray);
myArray.shift()   //remove the first element of array.
console.log(myArray);

console.log(myArray.includes(9));
console.log(myArray.indexOf(4));

const newArr = myArray.join()
console.log(myArray);
console.log(newArr);/change to string

//slice, splice



//it is object ,it ll store the all elements in an single variable
//array element store in squre brackets

const arr = [0, 1, 2, 3, "sachin", true];
//console.log(typeof arr)       // object
//console.log(arr[0])           // u can access array using index value

//other way to declare array using new keyword
const myArray = new Array(1, 2, 3, 4, 5, 6);

//**if u want to know more about array check prototype in console */

//array methods
myArray.push(7);                        //add last element to the array return new length
myArray.pop();                          //remove last element from array return new length
myArray.unshift(8)                      //inset the element at the start of the array
myArray.shift()                         //remove the element start of the array

//console.log(myArray)
//console.log(myArray.includes(4))      //it give true or false based on wether ele does exist or not
//console.log(myArray.indexOf(2))       // it return index value of array where it exist

const arr1 = myArray.join();            //add all the ele of array into string
//console.log(arr1)                     //it ll give the value in the form of array


//**important methods SLICE or SPLICE */

//slice:return new portion of an array selected from start and end (end not included )
//most important the original array ll not be modified
const arr2 = [0, 1, 2, 3, 4, 5];
console.log(arr2.slice(1,3));
console.log('A ',arr2) //original array ll not be modified

//splice:it changes the existing ele of array by removing or adding new ele and it ll modifiy original array
//start and end (end ll included here)
const arr3=[9,2,5,3,6,7];
console.log(arr3.splice(0,2))
console.log('B ',arr3) //B  [ 5, 3, 6, 7 ] see here its modified
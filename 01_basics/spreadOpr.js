//spread operaor add the existing value into new array
let exisingValur=['Sachin','Shiva'];
let currentValue=['Tejas',...exisingValur,'Santosh'];
console.log(currentValue);

//pass the element of an array to the function also

// function addNum(x,y,z){
//    return x+y+z;
// }
// var arg=[2,3,4];
// var result=...arg;
// console.log(result)


//arrowfunction
var num=function add(x,y){
    return x+y;
}
console.log(num(2,3));

//using arrow function
var additin=(x,y)=>x+y;
console.log(additin(4,5))
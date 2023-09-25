//how to use object in function
const obj = {
  name: "Sachin",
  age: 23,
};

// here we declaed obj outside so if we want to
// access it inside function we need to pass an argument to the function
function myFunction(accessObj) {
  console.log(`my name is ${accessObj.name} and age is ${accessObj.age}`);
}
//while function invocation we need to pass obj name so that it can access the value
//inside the function
myFunction(obj);

//how to access array in function
const arr = [100, 233, 554, 567];

function accessArray(accessArr) {
  return accessArr[1];
}
console.log(accessArray(arr));

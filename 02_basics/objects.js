//it is the represntation of javascript datatype in a key value pair

//we can create the object in two ways 
//singleton and literals

const mySym = Symbol('key1'); //how to access this symbol in object

//lets create object using literals
const myObj = {
    name: "sachin",  //behind the scene name ll be consider as string so while accessing use name in terms of string
    "firstName": "sagar", //
    [mySym]: "mykey1", //mySym can be accessed uing [mySym] squre brakcets
    age: 23,
    city: "Banglore",
    email: "sachin@microsoft.com",
    hobies: ["cricket", "football", "swimming"]
};
//here we can access the value in two ways 
//first one 

console.log(myObj.name);//while giving .dot no need to use string
console.log(myObj.firstName)

//second one:use this for best practice 

// console.log(myObj["city"]); //behind the scene city is a string so put it in string
// console.log(myObj["hobies"][1]);
// console.log(myObj[mySym]);

myObj.city = "Hyderbad";
console.log(myObj);

myObj.greeting = function () {
    return "hello js user";
}
console.log(myObj.greeting());
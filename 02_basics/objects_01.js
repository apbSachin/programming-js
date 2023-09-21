//const tinderUser=new Object(); //{} it is a singleton object

const tinderUser = {} // {} non singleton object
tinderUser.name = "Sachin";
tinderUser.lastName = "Biradar";
tinderUser.email = "sachin@google.com"
//console.log(tinderUser);

//nesed objects
const finaluser = {
    city: "Banglore",
    fullName: {
        userName: {
            firstName: "Tejas",
            lastName: "Patil"
        }
    }
};
//first way of accesing nested objects
//and for better apporach use optional 
console.log(finaluser.fullName?.userName?.firstName);

//second way of accesing the objects
console.log(finaluser["fullName"]["userName"]["lastName"]);


//how to merge two objects
const obj1 = {
    value1: 1,
    value2: 3
};

const obj2 = {
    value3: 11,
    value4: 33
};


//first way to merge
const result = { ...obj1, ...obj2 };
console.log(result);

//second way to merge
const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3);

const objUser = [
    {
        id1: 1,
        name1: "Sachin"
    },
    {
        id2: 2,
        name2: "Sagar"
    },
    {
        id3: 3,
        name3: "Tejas"
    },
];
//want to access key and values of objects use below syntax
console.log(Object.keys(objUser));
console.log(Object.values(objUser));
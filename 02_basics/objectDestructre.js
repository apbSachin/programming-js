//that makes it possible to unpack values from arrays, or properties from objects, into distinct variables

const obj = {
    course: "Angular",
    coursePrice: 999,
    courseInstructor: "Sachin"
};

//we can access the obj properties using like this
console.log(obj.course)
//or
console.log(obj["courseInstructor"]);

//but if u want print onbj.course many time than u cant write same multiple time so use destruture
//syntax

//const {write which property u want to extarct from the object}=from which object u want access the values write that object name here

const { courseInstructor } = obj;
console.log(courseInstructor)
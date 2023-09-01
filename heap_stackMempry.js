//Stack and Heap
//where stack and heap memeory ll be used
//**Stack(primitve):in stcak ll get copy of th value,  Heap(Non-Primitive):here ll get reference mean original value */

//stackmemory

let email="sachin@google.com";
let anotheremail=email;
anotheremail="google@goggle.com"
console.log(anotheremail);
console.log(email)


//heapmrmory

let obj={
    name:"sachin",
    id:13
}

let objOne=obj;
objOne.name="Akash"
console.log(obj);
console.log(objOne);
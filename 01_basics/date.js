
const date= new Date()
console.log(date) //2023-09-20T05:47:21.080Z we get like this which is unreadble

//to conveert it to more readble we use toString()
console.log(date.toString()) //Wed Sep 20 2023 05:48:26 GMT+0000 

//we have many other date methods which give output like below
console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toLocaleString());
console.log(date.toLocaleDateString());

//convert mm/dd/yyyy using to localeString()
const mydate=new Date('2023-01-12')
console.log(mydate.toLocaleString());

//convert dd/mm/yyyy
const myNewDate=new Date('2023-20-01');
//console.log(myNewDate.toLocaleString())
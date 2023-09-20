//const :keyword is used to declare the variable which cannot be reassigned 
const accountId = 1232;
let accountName = "HDFC";
var accountHolder = "Sachin";
accountBranch = "Banglore";


//accountId = 3242; //cannot reassign value for const
accountName = "ICICI";  //we can reassign value for let
accountHolder = "Shiva";
accountBranch = "Hyderbad";


/* dont use var beacuse issue in block scope and functional scope 
function scope :var which declare inside the function called local variable whic can 
be accessed inside the function

block scope: which declared inside the block which cannot be access outside the block
*/

console.table([accountId,accountName,accountHolder,accountBranch]);

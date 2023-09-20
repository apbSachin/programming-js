const indianPlayers = ["Virat", "MSD", "KLRahul"];
const sriLankanPlayers = ["Pathirana", "Malinga", "Snagakara"];
//if i want to merge two arrays by push method the output ll be like below
//[ 'Virat', 'MSD', 'KLRahul', [ 'Pathirana', 'Malinga', 'Snagakara' ] ] it like one array in another array
//bad way to do like this

//indianPlayers.push(sriLankanPlayers);

//we can also use cancat() method to merge two arrays
const bothTeam = indianPlayers.concat(sriLankanPlayers);
console.log(bothTeam);  //[ 'Virat', 'MSD', 'KLRahul', 'Pathirana', 'Malinga', 'Snagakara' ]

//**better way to do using spread operator */
const IplBatsman = [...indianPlayers, ...sriLankanPlayers];
console.log(IplBatsman); //[ 'Virat', 'MSD', 'KLRahul', 'Pathirana', 'Malinga', 'Snagakara' ]

//if u have array inside another array and u want final array than use below syntax
const arr1 = [1, 2, 3, [4, 5], 6, [7, 8, [9, 10]]]; //combine all array and subarray and give final array
const result = arr1.flat(Infinity);//return a new array with all sub arrays concatinated
console.log(result);

//if u want to convert string into array then see below solutions
const name = "SachinBiradar";
console.log(Array.isArray(name)); //false :its is string 
console.log(Array.from(name)); // [S', 'a', 'c', 'h','i', 'n', 'B', 'i',r', 'a', 'd', 'a','r'];

//if u want to add all variable into array use of() 
const num = 100;
const num2 = 200;
const num3 = 300;
console.log(Array.of(num, num2, num3))// set of ele include and form new array
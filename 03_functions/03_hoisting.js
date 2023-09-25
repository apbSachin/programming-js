function one() {
  const name = "Sachin";

  //in fucntion two i am accessing name variable  i.e hoisting
  function two() {
    const lastName = "Biradar";
    console.log(name);
    //console.log(lastName);
  }
  two();
}
one();

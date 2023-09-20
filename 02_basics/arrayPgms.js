//*finding the maximum element form an aray *//
//finding the maximum element in an array using Math.max() function and (... )spread operator
// Math.max() function applied to the spead operator and where it ll seperate the array element
//  and math.max ll return biggest element from an array

// 1) approach
function maxArray() {
    return Math.max(...arr)
}

const arr = [1, 3, 4, 6, 18];
//console.log(maxArray());

//2) appaoch using forEach()
function maxValue(arr) {
    let max = arr[0];
    arr.forEach(ele => {
        if (ele > max) {
            max = ele;
        }
    })
    return max;
}
const number = [12, 34, 76, 88];
//console.log(maxValue(number));


////////////////////////////////////////////////
//REMOVE DUBLICATES VALUE FROM AN ARRAY

//in js we can remove the dublicates value from array in straight forward using Set() data structure
function removeDublicates(arr) {
    const uniqSet = new Set(arr); //create a set from an array to automatically remove dublicates
    return Array.from(uniqSet); //convert the set back to an array

}
const value = [1, 2, 2, 3, 4, 4, 5, 6, 6,7,7];
const finalSet = removeDublicates(value);
console.log(finalSet);
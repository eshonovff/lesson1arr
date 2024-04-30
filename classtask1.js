//  task 1

// function mergeArrays(arr1, arr2) {
// return arr1.concat(arr2)
// }
// console.log(mergeArrays([1,2], [3,4]));


//  task 2

// function findIndex(arr,num) {
//     return arr.indexOf(num)
// }
// console.log(findIndex([1,3,5,6,4,2,3],2));


//  task 3
function removeDuplicates(arr) {
    let count = []
    arr.forEach(element => {
        if (console.log(!count.includes(element))) {
            count.push(element)

        }

    });


}
console.log(removeDuplicates([1, 2, 1, 3, 4, 6]));
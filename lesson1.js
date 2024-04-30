// function arrfunc(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//     sum+=arr[i]
//     }
//     return sum
// }
// console.log(arrfunc([50, 10, 5]));








// let arr = [1, 2, 3, 4, 5]
//     let map1 = arr.map((element))



// function arrmap(arr) {
//     let maparr = arr.map((element, i) => {
//         if (element % 2 == 0) {
//             return element * 10;
//         }
//         if (element % 2 != 0) {
//             return element * 20;
//         }
//     });
//     return maparr;
// }
// console.log(arrmap([1, 2, 3, 4, 5]));



//  task 2
// function maxNum(numarr) {
//     let max = -99999
//     numarr.forEach(elem => {
//         if (max < elem) max  = elem

//     });
//     return max

// }
// console.log(maxNum([3,8,9,4,2,3,8]));


//  task 3
// function evenCount(numarr) {
//     let cnt = 0
//     numarr.forEach(elem => {
//         if (elem %2 ==0) cnt++

//     });
//     return cnt

// }
// console.log(evenCount([3,8,9,4,2,3,8]));



//  task 4
// function evenCount(numarr, num) {
//     let cnt = 0

//     numarr.forEach(elem => {
//         if (elem == num)
//            cnt++
//     });
//     if (cnt > 0) return true
//     if (cnt == 0 ) return false

// }
// console.log(evenCount([3,8,9,4,2,3,8], 8));



// function evenCount (numarr, num) {
//     const findnum = numarr.find((element) => element == num)
//     if (findnum) return true
//     return false
// }
// console.log(evenCount([3, 9, 4, 8, 2, 3], 8));



//  task 5

// function evenCount(numarr) {
//     let cnt = 0
//     let sum = 0
//     numarr.forEach(elem => {
//         sum += elem
//         cnt ++

//     });
//     return sum/cnt

// }
// console.log(evenCount([2,4,6,8]));



// function numarr(arr) {
//     let  maparr = arr.map((element)=>{
//         if (typeof element == 'number') {
//            return element.toString()
//         }
//         if (typeof element == 'string') {
//           return +element
//         }
//     });
//     return maparr
// }
// console.log(numarr([45, "12", "15", 5 ]));



// function get(arr) {
//     let a = arr.filter((elem) => elem)
//     return a
// }
// console.log(get([null, undefined, true, false, "string", 56]));




if (false) {
    console.log(true);
}
else {
    console.log(false);
} 

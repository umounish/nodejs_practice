const samp = require("lodash");
let arr = [01, 02, 08, 21, 24, 27, 29, 42, 51, 52, 56];
  
console.log(samp.chunk(arr, 3)); // to split an array




const samp2 = require("lodash");
let arr2 = [1, 2, 3, false, 5, 6, '', 0, 7, 'true', true];
console.log(samp2.compact(arr2)); // compact is used to remove falsely elemts from the array

const samp3 = require("lodash");
let arr3 = [1, 2, 3, true, 5, 6, '', 0, 7, 'false', false];
console.log(samp2.compact(arr3)); // compact is used to remove falsely elemts from the array
/**
JS String Methods
**/ 

// 1. JavaScript String Length
let str = "String to calculate length";
console.log(str.length);
// op: 26

// 2. JavaScript String slice()
let str1 = "String to slice";
/** 
slice() extracts a part of a string and returns the extracted part in a new string.
The method takes 2 parameters: start position, and end position (end not included). 
**/
let sliceStr = str1.slice(0, 2);
console.log(sliceStr);
// op: St
/**
If you omit the second parameter, the method will slice out the rest of the string:
*/
let sliceStr1 = str1.slice(3);
console.log(sliceStr1);
// op: ing to slice
/*
If a parameter is negative, the position is counted from the end of the string
*/
let sliceStr2 = str1.slice(-5, -2);
console.log(sliceStr2);
// op: sli

// 3. JavaScript String substr()
let str2 = "String to Substring";
/**
 * It Takes 2 parameters First for Starting index.
 * Second Parameter refers length of extracted part.
 */
let subStringstr = str2.substr(2,2);
console.log(subStringstr);
// op: ri
/*
If a parameter is negative, it return from reverse order with provided length.
If length not specified then return whole extracted string.
*/
let subStringstr1 = str2.substr(-4);
console.log(subStringstr);
// op: ring
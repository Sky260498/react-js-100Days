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

// 4. Replacing String Content
let strReplace = "String to check replace method";
let replacedString = strReplace.replace("check", "tested");
console.log(replacedString);
// op: String to tested replace method
/*
The replace() method does not change the string it is called on.
The replace() method returns a new string.
The replace() method replaces only the first match
*/
/*To replace case insensitive, use a regular expression with an /i flag (insensitive)*/
let replacedString1 = strReplace.replace(/Replace/i,"tested");
console.log(replacedString1);
// op: String to tested replace method
/* 
To replace all matches, use a regular expression with a /g flag (global match)
*/
let newString = "The string with gobal match to replace all string occurances";
let replacedString2 = newString.replace(/string/g,"tested");
console.log(replacedString2);
// op:The tested with gobal match to replace all tested occurances

// 5. JavaScript String ReplaceAll()
let strReplaceAll = "Javascript string method to replace all the similar string occurances on given string";
let newReplacedStr = strReplaceAll.replaceAll("string", "replaced string");
console.log(newReplacedStr);
// op: Javascript replaced string method to replace all the similar replaced string occurances on given replaced string.

// 6. Javascript String trim()
/**
 * This Method remove all the whitespaces from front and back side of string.
 */
let strToTrim = "     Javascript string method to replace all the similar STRING occurances on given String     ";
let trimedString = strReplaceAll.trim();
console.log("Main String:",strReplaceAll);
console.log("Trimed String:",newReplacedStr);
// op: 
// Main String:      Javascript string method to replace all the similar STRING occurances on given String     
// Trimed String: Javascript string method to replace all the similar STRING occurances on given String
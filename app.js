/**
 * Palindrome Checker
 *
 * Return true if a string is a palindrome. Otherwise Return False.
 *
 * {param} @str the string we are checking
* */

// This was my first attempt at this code.
/*
function palindrome(str) {
    let lowerCaseStr = str.toLowerCase();
    // matching all non-alphanumeric characters (punctuation, spaces and symbols)
    let myRegex = /[a-z]|[A-Z]/g;
    let strArry = lowerCaseStr.match(myRegex); // returns [ 'an array of all non-alphanumeric letters' ]
    let reverseStrArry = [...strArry];
    reverseStrArry.reverse();
    // console.log(reverseStrArry);
    // console.log(strArry);

    if (strArry.length === reverseStrArry.length) {
        for (let i = 0; i < strArry.length; i++) {
            // testing if the index on each array matches. If they don't match, return false, if they do, keep checking
            // console.log("strArry[i]: " + strArry[i])
            // console.log("reverseStrArry[i]: " + reverseStrArry[i])
            if (strArry[i] === reverseStrArry[i]) {
            } else {
                console.log("these arrays don't match")
                return false
            }
        }
    } else {
        console.log("these arrays can't be a palindrome, they don't match")
        return false
    }
    return true
}
*/

function palindrome(str) {
    let lowerCaseStr = str.toLowerCase();
    // matching all non-alphanumeric characters (punctuation, spaces and symbols)
    let myRegex = /[a-z]|\d/i;
    let strArray = lowerCaseStr.split(""); // returns [ 'an array of all non-alphanumeric letters' ]
    let reverseStrArray = [];
    let newArray = [];


    for (let i = 0; i < strArray.length; i++) {
        if (myRegex.test(strArray[i])) {
            reverseStrArray.push(strArray[i])
            newArray.push(strArray[i])
        } else {
            // console.log("not a palindrome...")
            // return false
        }
        reverseStrArray.reverse();
    }
    // console.log(newArray.toString())
    // console.log(reverseStrArray.toString())
    // console.log(reverseStrArray.toString())


    if (newArray.toString() === reverseStrArray.toString()) {
        console.log("true!")
        return true
    } else {
        console.log("false!")
        return false
    }

};



// palindrome("eye");
// palindrome("asdjf");
// palindrome('Hello');
palindrome("1 eye for of 1 eye.");
palindrome("0_0 (: /-\ :) 0-0");



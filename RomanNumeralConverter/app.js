
/**
 * @author Joshua Godfrey <Godfreyjosh.jg@gmail.com>
 *
 * This program will convert an integer into a roman numeral
 * all roman numeral answers will be returned in upper case
 *
 * @param num {number} the number the will convert into a roman numeral
 *
 * @function convertToRoman
 * */

function convertToRoman(num) {
    let romanNumeralObj = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
    // create an object to hold the roman numeral table. Each key value pair will hold the numeral and digit
    let convertedString = '';
    // iterate through the roman numeral object

    for ( let i in romanNumeralObj ) {
        // console.log(`roman numeral: ${i} === ${romanNumeralObj[i]}`);
        // if the number passed in is larger, or equal to the integer,
        while ( num >= romanNumeralObj[i] ) {
            // push the roman numeral to the empty string
            convertedString += i;
            // subtract from the orginal number passed
            num -= romanNumeralObj[i];
        }
    }
    console.log(convertedString)
    return convertedString;
}


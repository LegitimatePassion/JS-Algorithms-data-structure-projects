/**
 * Roman Numeral Converter
 *
 * This program will convert an integer into a roman numeral
 * all roman numeral answers will be returned in upper case
 *
 * */

// var romanNumerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']; //an array of roman numerals in order from largest to smallest
// var decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]; //an array of decimals values that match the index of the roman numerals

console.log("script running! ")

var romanArrayObj = [
    { d:1, r:'I' },
    { d:4, r:'IV' },
    { d:5, r:'V' },
    { d:9, r:'IX' },
    { d:10, r:'X' },
    { d:40, r:'XL' },
    { d:50, r:'L' },
    { d:90, r:'XC' },
    { d:100, r:'C' },
    { d:400, r:'CD' },
    { d:500, r:'D' },
    { d:900, r:'CM' },
    { d:1000, r:'M' }
];

let romanNum = parseInt(prompt("Enter a number to convert!"));

function convertToRoman(romanNum) {
    var roman = '';

    if (romanNum > 0) {

    } else {
        alert("This isn't a valid number")
    }

    return roman;
}

convertToRoman(36);
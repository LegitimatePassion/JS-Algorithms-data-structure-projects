/**
 * Palindrome Checker
 *
 * Return true if a string is a palindrome. Otherwise Return False.
 *
 * {param} @str the string we are checking
* */


function palindrome(str) {
    str.toLowerCase();
    // matching all non-alphanumeric characters (punctuation, spaces and symbols)
    myRegex = /[a-z]|[A-Z]/g;
    str.match(myRegex); // Should return [ 'h', 'e', 'l', 'l', 'O' ]
    return str;
}



palindrome("eye");


toLowerCase();
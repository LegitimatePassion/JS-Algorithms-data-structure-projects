/*
// This was my original code. A simple if statement. The code block below was suggested by webstorm.
function telephoneCheck(str) {
    let teleValid = /^(1 |1-|1)?(\((\d{3})\)|(\d{3}))[- ]?(\d{3})[- ]?(\d{4})$/gm
    if (str.match(teleValid)) {
        return true
    } else {
        return false
    }
}
*/

function telephoneCheck(str) {
    let teleValid = /^(1 |1-|1)?(\((\d{3})\)|(\d{3}))[- ]?(\d{3})[- ]?(\d{4})$/gm
    return !!str.match(teleValid);
}

telephoneCheck("555-555-5555"); // false
telephoneCheck("1 555-555-5555"); // true
telephoneCheck("555-555-5555")


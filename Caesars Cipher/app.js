/**
 * (Author) Joshua Godfrey <Godfreyjosh.jg@gmail.com>
 *
 * (Function rot13) - This function will take any ROT13 encoded string and return a decoded string.
 * @param {string} str the string we need to decipher.
 *
 *
 * */

function rot13(str) {
    let alphabet13 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let alphabetArray = [...alphabet13];
    // console.log(alphabetArray)
    let cipher13 = "NOPQRSTUVWXYZABCDEFGHIJKLM";
    // let cipherArray = [...cipher13];
    // console.log(cipherArray)
    // the empty array we will use to store the deciphered phrase
    let brokenCipher = [];

    for (let i = 0; i < str.length; i++) {
        let stringIndex = alphabetArray.indexOf(str[i]);
        if (cipher13.charCodeAt(stringIndex) > 0) {
            brokenCipher.push(String.fromCharCode(cipher13.charCodeAt(stringIndex)));
        } else {
            brokenCipher.push(str[i])
        }
    }
    let newString = brokenCipher.join('').toUpperCase();
    console.log(newString);
    return newString;
}

let broken = rot13('HELLO HI JH!');
console.log(broken);
let broken1 = rot13("SERR PBQR PNZC");
console.log(broken1);
let broken2 = rot13("SERR CVMMN!");
console.log(broken2);
let broken3 = rot13("SERR YbiR?");
console.log(broken3);
let broken4 = rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
console.log(broken4);



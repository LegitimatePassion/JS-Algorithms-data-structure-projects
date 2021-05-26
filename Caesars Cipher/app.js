/**
 * Author Joshua Godfrey <Godfreyjosh.jg@gmail.com>
 *
 *
 * @param {string} str
 *
 *
 * */

function rot13(str) {
    let stringArg = str;
    var cipher = {
        A: 'N',
        B: 'O',
        C: 'P',
        D: 'Q',
        E: 'R',
        F: 'S',
        G: 'T',
        H: 'U',
        I: 'V',
        J: 'W',
        K: 'X',
        L: 'Y',
        M: 'Z',
        N: 'A',
        O: 'B',
        P: 'C',
        Q: 'D',
        R: 'E',
        S: 'F',
        T: 'G',
        U: 'H',
        V: 'I',
        W: 'J',
        X: 'K',
        Y: 'L',
        Z: 'M',
    };
    let brokenCipher = '';
    let wordArr = [];
    for (const letter of str) {
        wordArr.push(letter);
    }
    console.log(wordArr)
    // console.log(wordArr)
    // if the typeof the string does not equal string, stop the function
    // if (typeof str !== "string") {
    //     console.log('This is not a string')
    //     return false


    console.log(brokenCipher);
    return brokenCipher;
}

rot13('HELLO HI JH')


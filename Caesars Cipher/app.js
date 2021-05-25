/**
 * Author Joshua Godfrey <Godfreyjosh.jg@gmail.com>
 *
 *
 * {param}
 *
 *
 * */


function rot13(str) {
    let cipher = {
         A:'N',
        'B':'O',
        'C':'P',
        'D':'Q',
        'E':'R',
        'F':'S',
        'G':'T',
        'H':'U',
        'I':'V',
        'J':'W',
        'K':'X',
        'L':'Y',
        'M':'Z',
        'N':'A',
        'O':'B',
        'P':'C',
        'Q':'D',
        'R':'E',
        'S':'F',
        'T':'G',
        'U':'H',
        'V':'I',
        'W':'J',
        'X':'K',
        'Y':'L',
        'Z':'M',};
    var brokenCipher = '';
    var wordArr = [...str];
    // console.log(wordArr)
    var myRegex = /[a-z]/i

    // if the typeof the string does not equal string, stop the function
    if (typeof str !== "string") {
        console.log('This is not a string')
        return false
        // if the value passed in is a string, loop through each letter of the word and replace it with the value mapped to the key (from the cipher
    } else {
        // todo there is something broken with this loop, it's returning an empty string
        for (let i = 0; i < wordArr; i++) {
            if (wordArr[i] === ' ') {
                brokenCipher += ' ';
                console.log(brokenCipher)
                return
            } else if (!wordArr[i].match(myRegex)) {
                brokenCipher += wordArr[i]
                return
            } else {
                brokenCipher += wordArr[i]
                return
            }
        }
    }


    console.log(brokenCipher)
    return brokenCipher;
}

let testString = "SERR PBQR PNZC";

let result = typeof testString;

rot13();
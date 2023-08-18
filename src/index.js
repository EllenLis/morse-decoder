const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = [];
    let str = '';
    let count = 0;

    for (let symb of expr) {
        str += symb;
        count++;
        if (count === 10) {
            arr.push(str)
            str = '';
            count = 0;
        }
    }

    return arr.map((item) => {
        let letter = '';
        if (item === '**********') {
            letter = ' ';
            return letter;
        }
        for (let i = 0; i <= item.length; i = i + 2) {
            if (item[i] === '1' && item[i + 1] === '1') letter += '-';
            if (item[i] === '1' && item[i + 1] === '0') letter += '.';
        }
        return letter;
    }).map((letter) => {
        if (letter === ' ') return ' ';
        if (letter in MORSE_TABLE) {
            return MORSE_TABLE[letter]
        }
    }).join('');

}

module.exports = {
    decode
}
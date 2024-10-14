const readline = require('readline-sync');

function nextInt() {
    return readline.questionInt('Next number: ');
}

function nextString() {
    return readline.question('Next string: ');
}

module.exports = {
    nextInt,
    nextString
};

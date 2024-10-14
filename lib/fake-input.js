function getNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const names = ['Nick', 'Corrine', 'Kloi', 'Ember', 'Ziggy', 'Mark', 'Sasha', 'Mia', 'Tyler', 'Jake'];

const numbers = new Array(getNumberBetween(0, 10)).fill(0).map(() => getNumberBetween(-10, 10));
const strings = new Array(getNumberBetween(0, 10)).fill('').map(() => names.splice(getNumberBetween(0, names.length - 1), 1)[0]);
let numIndex = 0;
let strIndex = 0;

function nextInt() {
    return numbers[numIndex++] ?? 0;
}

function nextString() {
    return strings[strIndex++] ?? '';
}

module.exports = {
    nextInt,
    nextString
};

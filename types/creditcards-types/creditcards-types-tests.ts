// finding
import types = require('creditcards-types');

const type = types.find(type => type.test('4', true));
// type.name => Visa

// specific types
import visa = require('creditcards-types/types/visa');
visa.test('4242424242424242'); // true

// creating custom types
import Type = require('creditcards-types/type');
const myCard = new Type({
    name: 'My Card',
    pattern: /^999\d{13}$/,
    eagerPattern: /^999/,
    luhn: false,
});

const myTypes = types.concat(myCard); // myCard gets lowest priority

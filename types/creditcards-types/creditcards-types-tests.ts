import types = require('creditcards-types');
import CardType = require('creditcards-types/type');

const amex = new CardType({
  name: 'sring',
});

amex.name; // $ExpectType string

import Type = require('../type');

declare const AmericanExpress: Type<{
    name: 'American Express';
    regex: RegExp;
}>;

export = AmericanExpress;

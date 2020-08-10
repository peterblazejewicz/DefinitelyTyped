import Type = require('../type');

declare const Visa: Type<{
    name: 'Visa';
    digits: [13, 19];
    pattern: RegExp;
    eagerPattern: RegExp;
    groupPattern: RegExp;
}>;

export = Visa;

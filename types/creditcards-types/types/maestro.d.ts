import Type = require('../type');

declare const Maestro: Type<{
    name: 'Maestro';
    digits: [12, 19];
    pattern: RegExp;
    eagerPattern: RegExp;
    groupPattern: RegExp;
}>;

export = Maestro;

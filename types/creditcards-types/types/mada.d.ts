import Type = require('../type');

declare const Mada: Type<{
    name: 'Mada';
    digits: number;
    pattern: RegExp;
    eagerPattern: RegExp;
}>;

export = Mada;

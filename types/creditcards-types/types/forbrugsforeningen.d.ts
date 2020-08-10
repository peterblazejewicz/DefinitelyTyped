import Type = require('../type');

declare const Forbrugsforeningen: Type<{
    name: 'Forbrugsforeningen';
    pattern: RegExp;
    eagerPattern: RegExp;
}>;

export = Forbrugsforeningen;

import Type = require('../type');

declare const Dankort: Type<{
    name: 'Dankort';
    pattern: RegExp;
    eagerPattern: RegExp;
}>;

export = Dankort;

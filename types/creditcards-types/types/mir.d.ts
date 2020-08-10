import Type = require('../type');

declare const Mir: Type<{
    name: 'Mir';
    pattern: RegExp;
    eagerPattern: RegExp;
    groupPattern: RegExp;
}>;

export = Mir;

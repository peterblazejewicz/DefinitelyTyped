import Type = require('../type');

declare const DinersClub: Type<{
    name: 'Diners Club';
    digits: [14, 19];
    pattern: RegExp;
    eagerPattern: RegExp;
    groupPattern: RegExp;
}>;

export = DinersClub;

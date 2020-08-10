import Type = require('../type');

declare const MasterCard: Type<{
    name: 'Mastercard';
    pattern: RegExp;
    eagerPattern: RegExp;
}>;

export = MasterCard;

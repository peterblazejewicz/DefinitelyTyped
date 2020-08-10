import Type = require('../type');

declare const UnionPay: Type<{
    name: 'UnionPay';
    pattern: RegExp;
    eagerPattern: RegExp;
    groupPattern: RegExp;
    luhn: false;
}>;

export = UnionPay;

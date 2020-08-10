import Type = require('../type');

declare const UATP: Type<{
    name: 'UATP';
    digits: 15;
    pattern: RegExp;
    eagerPattern: RegExp;
    groupPattern: RegExp;
}>;

export = UATP;

import Type = require('../type');

declare const JCB: Type<{
    name: 'JCB';
    pattern: RegExp;
    eagerPattern: RegExp;
}>;

export = JCB;

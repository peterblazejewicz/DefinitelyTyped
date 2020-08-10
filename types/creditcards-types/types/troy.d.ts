import Type = require('../type');

declare const Troy: Type<{
    name: 'Troy';
    pattern: RegExp;
    eagerPattern: RegExp;
}>;

export = Troy;

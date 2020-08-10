import Type = require('../type');

declare const Discover: Type<{
    name: 'Discover';
    pattern: RegExp;
    eagerPattern: RegExp;
}>;

export = Discover;

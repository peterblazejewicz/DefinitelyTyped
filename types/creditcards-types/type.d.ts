declare class CardType<P = {}> {
    constructor(props?: P);
}
declare interface CardType<P = {}> {
    new (props?: P): CardType<P> & P;
    digits?: number;
    cvcLength?: number;
    luhn?: boolean;
    groupPattern: RegExp;
    group(number: string): number[];
    test(number: string, eager?: boolean): boolean;
}

export = CardType;

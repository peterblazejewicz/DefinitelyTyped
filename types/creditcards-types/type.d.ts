
declare type CardProps = {
    [key: string]: unknown;
}

declare interface CardType<T extends object = CardProps> {
    digits: number;
    cvcLength: number;
    luhn: boolean;
    groupPattern: RegExp;
    group(number: string): number;
    test(number: string, eager?: boolean): boolean;
}

declare interface CardTypeConstructor<T extends object = CardProps> {
    new (data: T): T & CardType<T>;
    (data: T): T & CardType<T>;
}

declare const CardType: CardTypeConstructor

export = CardType;

// Type definitions for loader-utils 3.1
// Project: https://github.com/webpack/loader-utils#readme
// Definitions by: Gyusun Yeom <https://github.com/Perlmint>
//                 Totooria Hyperion <https://github.com/TotooriaHyperion>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
//                 Jesse Katsumata <https://github.com/Naturalclar>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import isUrlRequest = require('./isUrlRequest');
import urlToRequest = require('./urlToRequest');
import getHashDigest = require('./getHashDigest');
import interpolateName = require('./interpolateName');

export interface InterpolateOption {
    context?: string | undefined;
    content?: string | Buffer | undefined;
    regExp?: string | RegExp | undefined;
}

export interface OptionObject {
    [key: string]: null | false | true | string;
}
export type HashType = 'sha1' | 'md4' | 'md5' | 'sha256' | 'sha512' | 'xxhash64';
export type DigestType = 'hex' | 'base26' | 'base32' | 'base36' | 'base49' | 'base52' | 'base58' | 'base62' | 'base64';

export { isUrlRequest, urlToRequest, getHashDigest, interpolateName };

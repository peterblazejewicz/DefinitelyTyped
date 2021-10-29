import { DigestType, HashType } from '.';

/**
 * @param buffer
 * @param [hashType='md4']
 * @param [digestType='xxhash64']
 * @param [maxLength=9999]
 */
declare function getHashDigest(buffer: Buffer, hashType: HashType, digestType: DigestType, maxLength: number): string;

export = getHashDigest;

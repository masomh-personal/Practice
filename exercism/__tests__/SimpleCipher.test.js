import { Cipher } from '../SimpleCipher.js';

describe('Random key cipher', () => {
  const cipher = new Cipher();

  it('can encode', () => {
    // Here we take advantage of the fact that plaintext of "aaa..."
    // outputs the key. This is a critical problem with shift ciphers, some
    // characters will always output the key verbatim.
    const result = cipher.encode('aaaaaaaaaa');
    expect(result).toEqual(cipher.key.substring(0, 10));
  });

  it('can decode', () => {
    expect(cipher.decode(cipher.key.substring(0, 10))).toEqual('aaaaaaaaaa');
  });

  it('is reversible', () => {
    // I.e., if you apply to decode to an encoded result, you should get
    // the same plaintext encode parameter as a result of the decode method
    const plaintext = 'abcdefghij';
    expect(cipher.decode(cipher.encode(plaintext))).toEqual(plaintext);
  });

  it('key is made only of lowercase letters', () => {
    expect(cipher.key).toMatch(/^[a-z]+$/);
  });
});

describe('Substitution cipher', () => {
  const key = 'abcdefghij';
  const cipher = new Cipher(key);

  it.skip('can encode', () => {
    expect(cipher.encode('aaaaaaaaaa')).toEqual('abcdefghij');
  });

  it.skip('can decode', () => {
    expect(cipher.decode('abcdefghij')).toEqual('aaaaaaaaaa');
  });

  it.skip('is reversible', () => {
    expect(cipher.decode(cipher.encode('abcdefghij'))).toEqual('abcdefghij');
  });

  it.skip('can double shift encode', () => {
    expect(new Cipher('iamapandabear').encode('iamapandabear')).toEqual('qayaeaagaciai');
  });

  it.skip('can wrap on encode', () => {
    expect(cipher.encode('zzzzzzzzzz')).toEqual('zabcdefghi');
  });

  it.skip('can wrap on decode', () => {
    expect(cipher.decode('zabcdefghi')).toEqual('zzzzzzzzzz');
  });

  it.skip('can encode messages longer than the key', () => {
    expect(new Cipher('abc').encode('iamapandabear')).toEqual('iboaqcnecbfcr');
  });

  it.skip('can decode messages longer than the key', () => {
    expect(new Cipher('abc').decode('iboaqcnecbfcr')).toEqual('iamapandabear');
  });
});

import CryptoJS from 'crypto-js';
import sha256 from 'crypto-js/sha256';

const iv = CryptoJS.enc.Utf8.parse('');

export function encryptAES(text: string, key: string) {
  const result = CryptoJS.AES.encrypt(text, sha256(key), {
    keySize: 256 / 8,
    BlockSize: 128,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
    iv: iv,
  });
  return result.toString();
}

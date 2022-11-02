export function getRandomString() {
  const passwordLength = 10;
  const passwordRange =
    '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz.<>/[]!@#$%^&*()+=-';
  let randomString = '';
  for (let i = 0; i < passwordLength; i++) {
    const rangeIndex = Math.floor(Math.random() * passwordRange.length);
    randomString += passwordRange.substring(rangeIndex, rangeIndex + 1);
  }
  return randomString;
}

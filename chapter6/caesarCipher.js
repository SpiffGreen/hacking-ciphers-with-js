/**
 * Caesar Cipher
 */

// const message = "Hello world";

// const key = 13;

function encrypt(msg, key) {
  const LETTERS = "abcdefghijklmnopqrstuvwxyz";
  msg = msg.toLowerCase().split("");
  let result = "";
  msg.forEach(i => {
    const plainTextLetterIdx = LETTERS.indexOf(i);
    let character = i;
    if(plainTextLetterIdx != -1) {
      const sum = plainTextLetterIdx + key;
      sum > 26 ? sum -= 26 : null;
      character = LETTERS[sum];
    }
    result += character;
  });
  return result;
}

function decrypt(msg, key) {
  const LETTERS = "abcdefghijklmnopqrstuvwxyz";
  msg = msg.toLowerCase().split("");
  let result = "";
  msg.forEach(i => {
    const plainTextLetterIdx = LETTERS.indexOf(i);
    let character = i;
    if(plainTextLetterIdx != -1) {
      const sub = plainTextLetterIdx - key;
      sub < 0 ? sub += 26 : null;
      character = LETTERS[sub];
    }
    result += character;
  });
  return result;
}

const enct = encrypt("Hello world!", 1);
const dect = decrypt(enct, 1);
console.log("Encrypted: ", enct);
console.log("Decrypted: ", dect);

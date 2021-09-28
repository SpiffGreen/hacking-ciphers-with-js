/**
 * Reverse Cipher program
 */

const plaintext = "Hello world!";

function reverseCipher(plaintext) {
  const ciphertext = plaintext.split("").reverse().join("");
  return ciphertext;
}

console.log(reverseCipher(plaintext));
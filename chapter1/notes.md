### What is Cryptography
`Cryptography` is the science of using secret codes. A `Cryptographer` is someone who uses and studies secret codes. A `Cryptanalyst` is someone who can hack secret codes and read other people's encrypted messags. `Cryptanalyst` are also called code breakers or hackers.

### Codes and Ciphers
A little history. In the 19th century the telegraph was created, this was used for near instant communication but this is done electronically, i.e data was sent using electric pulses. Here, a dot and dash was used to represent short and long pulse respectively. A combination of these is used to form an alphabet/character. An system for translating english to this electric pulse code had to be developed (called encoding) and at the other hand translate from electric pulse code to english (called decoding). The code to do this was called `Morse Code`. visit http://invpy.com/morse to learn morse code.

### Cipher Wheels
Note: `Plaintext` = english text, `ciphertext` = gibberish text that hides a secret code.
A `Cipher` is a set of rules for converting between plaintext and ciphertext.
A Cipher wheel is a simple tool showing the english alphabets and corresponding indexes. This tool can be used for creating a caesar cipher.

### The Caesar Cipher
For encrypting data using the caesar cipher, an encryption key is needed. This key is used for decrypting the ciphertext back to plaintext. Here, the characters are shifted a number of times(i.e the encryption key) while for decrypting the ciphertext the characters are shifted in the opposite direction.

### St. Cyr slides
There’s another paper tool that can be used to do encryption and
decryption, called the St. Cyr slide. It’s like the cipher wheel
except in a straight line.

### Doing cryptography without pencil and paper
The normal idea behind the Caesar cipher is applied here but not on already printed material or tools.
Note: For the caesar cipher when encrypting, as one adds the encryption key to the current character index, if the sum is greater than or equal to 26 i.e the number of letters in the english alphabet, then the index for the new(encrypted) letter would be (sum - 26).
You decide on a key between (1 - 25).
#### __The Algorithm__
For encryption
1. Decide on a key from 1 to 25. Keep this key secret!
2. Find the plaintext letter’s number.
3. Add the key to the plaintext letter’s number.
4. If this number is larger than 26, subtract 26.
5. Find the letter for the number you’ve calculated. This is the ciphertext letter.
6. Repeat steps 2 to 5 for every letter in the plaintext message.

For decryption
1. Using the encryption key.
2. Find the ciphertext letter’s number.
3. Subtract the key from the ciphertext letter’s number.
4. If this number is less than 0, add 26.
5. Find the letter for the number you’ve calculated. This is the plaintext letter.
6. Repeat steps 2 to 5 for every letter in the plaintext message.

### Double strength encryption
For most encryption ciphers, encrypting more than once does not provide additional
strength to the cipher. In fact, if you encrypt some plaintext with two keys that add up to 26, the
ciphertext you end up with will be the same as the original plaintext!
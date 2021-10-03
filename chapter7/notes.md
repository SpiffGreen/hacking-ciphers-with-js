# Encrypting with the Transposition Cipher

The Caesar cipher isn't secure. It doesn't take much for a computer to brute-force through all twenty-six possible keys. The transposition cipher has many more possible keys to make a brute force attack more difficult.

Instead of replacing characters with other characters, the transposition cipher jumbles up the
message’s symbols into an order that makes the original message unreadable.

## How it works

Let’s start by encrypting the message “Common sense is not so common.” with pencil and paper. Including the spaces and punctuation, this message has 30 characters. We will use the
number 8 for the key.
The first step is to draw out a number of boxes equal to the key. We will draw 8 boxes since our
key for this example is 8:
The second step is to start writing the message you want to encrypt into the boxes, with one
character for each box. Even white space characters are recognized here.
We only have 8 boxes but there are 30 characters in the message. When you run out of boxes,
draw another row of 8 boxes under the first row. Keep creating new rows until you have written
out the full message:
The ciphertext is the
letters read from the top left box going down the column. “C”, “e”, “n”, and “o” are from the 1 st
column. When you get to the last row of a column, move to the top row of the next column to the
right. The next characters are “o”, “n”, “o”, “m”. Ignore the shaded boxes.

### The steps for encrypting are:

1. Count the number of characters in the message and the key.
2. Draw a number of boxes equal to the key in a single row. (For example, 12 boxes for a
key of 12.)
3. Start filling in the boxes from left to right, with one character per box.
4. When you run out of boxes and still have characters left, add another row of boxes.
5. Shade in the unused boxes in the last row.
6. Starting from the top left and going down, write out the characters. When you get to the
bottom of the column, move to the next column to the right. Skip any shaded boxes. This
will be the ciphertext.


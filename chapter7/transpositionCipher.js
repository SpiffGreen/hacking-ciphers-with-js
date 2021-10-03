function encrypt(msg, key) {
  const container = [[]];
  let current = 0;
  msg = msg.split("");
  msg.forEach((i, idx, arr) => {
    if(container[current].length >= key) {
      container.push([i]);
      current++;
    } else {
      container[current].push(i);
    }
  });
  let result = "";
  let i = 0, j = 0;
  let totalNumberOfElems = container[container.length - 1].length + (container.length - 1) * key)
  while(true) {
    if((i * j) >= arr) break;
    if(i >= container.length) {
      i = 0;
      j++;
    }
    result += container[i][j];
    i++;
  }
  return container;
}

console.log(encrypt("Common sense is not so common.", 8));

// function decrypt(msg, key) {
  
// }
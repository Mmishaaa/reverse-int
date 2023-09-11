module.exports = function reverse (n) {
  let nstr = n.toString();
  let numbers = nstr.split('');
  let result = '';
  for (let i = numbers.length - 1; i >= 0; i--)
  {
    result += numbers[i];
  }
  return parseInt(result);
}



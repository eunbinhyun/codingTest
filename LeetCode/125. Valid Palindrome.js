/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(s) {
  const word = s.toLowerCase();
  const parsed = word.replace(/[^0-9|^a-z]|[\s]/g, '')
  return parsed ===  parsed.split('').reverse().join('');
};

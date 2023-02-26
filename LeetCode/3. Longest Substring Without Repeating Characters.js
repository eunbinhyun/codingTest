/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
   let l = 0;
   const set = new Set();
   let answer = 0;
   for (let r = 0; r < s.length; r++) {
       while (set.has(s[r])) {
            set.delete(s[l]);
            l++;
       }
       set.add(s[r]);
       answer = Math.max(set.size, answer);
   }
    return answer;
};

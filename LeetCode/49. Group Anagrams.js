const groupAnagrams = function (strs) {
    const arr = Array(26).fill(0);
    const ASCII_A = 97;
    for (const str of strs) {
        for (let i=0; i < str.length; i++) {
            const ascii = str.charCodeAt(i);
            const idx = ascii - ASCII_A;
            arr[idx]++;
        }
    }
 };

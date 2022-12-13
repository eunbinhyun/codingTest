/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
    const stack = [];
    for (const ch of s) {
        if (['(', '[', '{'].includes(ch)) {
            stack.push(ch);
            continue;
        }
        const top = stack[stack.length - 1];
        if (top === parentheses[ch]) {
            stack.pop();
        }
        else {
            stack.push(ch);
        }
    }
    return stack.length ? false : true;
};

const parentheses = {
    '}': '{',
    ')': '(',
    ']': '[',
};

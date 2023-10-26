/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const cols = new Set();
    const posDiagonal = new Set();
    const nevDiagonal = new Set();
    const answer = [];

    const map = Array.from({length: n}, () => Array.from({length: n}, () => "."));
    const backtrack = (row) => {
        if (row === n) {
            answer.push(map.map(item => item.join("")));
            return;
        }
        for (let i = 0; i < n; i++) {
            if (cols.has(i) || posDiagonal.has(row + i) || nevDiagonal.has(row - i)) continue;
            map[row][i] = "Q";
            cols.add(i);
            posDiagonal.add(row + i);
            nevDiagonal.add(row - i);
            backtrack(row + 1);
            map[row][i] = ".";
            cols.delete(i);
            posDiagonal.delete(row + i);
            nevDiagonal.delete(row - i);
        }
    }
    backtrack(0);
    return answer;
};

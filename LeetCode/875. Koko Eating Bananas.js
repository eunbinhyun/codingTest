/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let lower = 0;
    let upper = Math.max(...piles);
    let answer = upper;     
    while (lower <= upper) {
        let k = parseInt((lower + upper) / 2);
        let hours = 0;
        for (let i = 0; i < piles.length; i++) {
            hours += Math.ceil(piles[i] / k);
        }
        if (hours <= h) {
            answer = Math.min(answer, k);
            upper = k - 1;
        }
        else {
            lower = k + 1;
        }
    }
    return answer;
};

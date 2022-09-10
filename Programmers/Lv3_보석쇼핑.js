function solution(gems) {
    let answer = [0, gems.length];
    let start = 0;
    let end = 0;
    const collection = new Map();
    const gemKind = new Set(gems).size;
    collection.set(gems[start], 1);
    while (start < gems.length && end < gems.length) {
        if (collection.size === gemKind) {
            if (end - start < answer[1] - answer[0]) {
                answer = [start + 1, end + 1];
            }
            const cnt = collection.get(gems[start]);
            if (cnt - 1 === 0) {
                collection.delete(gems[start]);
            }
            else {
                collection.set(gems[start], cnt - 1);
            }
            start++;
        }
        else if (collection.size < gemKind) {
            end++;
            const cnt = collection.get(gems[end]);
            collection.set(gems[end], 1 + (cnt || 0));
        }
    }
    return answer;
}

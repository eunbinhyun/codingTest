function union(parents, a, b) {
    const pA = find(parents, a);
    const pB = find(parents, b);
    if (pA < pB) parents[pB] = pA; 
    else parents[pA] = parents[pB];
}

function find(parents, x) {
    if (parents[x] === x) return x;
    return parents[x] = find(parents, parents[x]);
}

function isSameGroup(parents, a, b) {
    return find(parents, a) === find(parents, b);
}

function solution(n, costs) {    
    let answer = 0;
    const sortedCosts = costs.sort((a, b) => a[2] - b[2]);
    const parents = Array.from({length: n}, (_, i) => i);
    for (const [a, b, cost] of sortedCosts) {
        if (!isSameGroup(parents, a, b)) {
            answer += cost;
            union(parents, a, b);
        }
    }
    
    return answer;
}

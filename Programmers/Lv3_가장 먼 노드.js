function solution(n, edge) {  
    const leaf = [];
    const graph = Array.from({length: n + 1}, () => []);
    for (const [v1, v2] of edge) {
        graph[v1].push(v2);
        graph[v2].push(v1);
    }
    
    const queue = [];
    const dist = Array.from({length: n + 1}, () => 0);
    
    queue.push(1);
    dist[1] = 1;
    
    while (queue.length) {
        const v = queue.shift();
        const adjacent = graph[v];
        for ( const nv of adjacent) {
            if (dist[nv] === 0) {
                queue.push(nv);
                dist[nv] = dist[v] + 1;
            }
        }
    }
    const max = Math.max(...dist.map(v => v));
    return dist.filter(v => v === max).length;
}

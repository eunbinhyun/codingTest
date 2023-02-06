function BFS(queue, maps, visited) {
    let sum = 0;
    while (queue.length) {
        const [x, y] = queue.shift();
        sum += Number(maps[x][y]);
        for (const dir of [[0, 1], [1, 0], [-1, 0], [0, -1]]) {
            const [dx, dy] = dir;
            const nx = x + dx;
            const ny = y + dy;
            if (nx >= 0 && nx < maps.length && ny >=0 && ny < maps[0].length && maps[nx][ny] !== 'X' && !visited[nx][ny]) {
                queue.push([nx, ny]);
                visited[nx][ny] = true;
            }
        }
        
    }
    return sum;
}

function solution(maps) {
    var answer = [];
    const queue = [];
    const visited = Array.from({length: maps.length}, () => Array.from({length: maps[0].length}, () => false));
    
    for (let i = 0; i < maps.length; i++) {
        for (let j = 0; j < maps[0].length; j++) {
            if (maps[i][j] !== 'X' && visited[i][j] === false) {
                queue.push([i, j]);
                visited[i][j] = true;
                answer.push(BFS(queue, maps, visited));
            }
        }
    }
    return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}

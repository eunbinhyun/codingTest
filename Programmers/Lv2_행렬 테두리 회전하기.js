function solution(rows, columns, queries) {
    const answer = [];
    const map = Array.from({length: rows + 2}, (_, i) => {
        if (i === 0 || i === rows + 1) 
            return Array.from({length: columns + 2}, () => 0);
        else 
            return Array.from({length: columns + 2}, (_, j) => {
                if (j === 0 || j === columns + 1) return 0;
                return (i-1) * columns + j;
            })
        });

    for (const query of queries) {
        const [startX, startY, endX, endY] = query;
        let tmp = map[startX][startY];
        let min = map[startX][startY];
        // down
        for (let i = startX; i < endX; i++) {
            map[i][startY] = map[i+1][startY];
            min = Math.min(map[i+1][startY], min);   
        }
        // right
        for (let i = startY; i < endY; i++) {
            map[endX][i] = map[endX][i+1];           
            min = Math.min(map[endX][i+1], min);   
        }
        // up
        for (let i = endX; i > startX; i--) {
            map[i][endY] = map[i-1][endY];
            min = Math.min(map[i-1][endY], min);   
        }
        // left
        for (let i = endY; i > startY+1; i--) {
            map[startX][i] = map[startX][i-1];
            min = Math.min(map[startX][i-1], min);   
        }
        
        map[startX][startY+1] = tmp;
        answer.push(min);
    }
    
    return answer;
}

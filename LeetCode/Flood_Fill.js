const fill = (image, x, y, originalColor, newColor) => {
    if (x < 0 || y < 0 || x >= image.length || y >= image[0].length || image[x][y] !== originalColor) {
        return;
    }
    image[x][y] = newColor;
    for (const [dirX, dirY] of [[1, 0], [0, 1], [-1, 0], [0, -1]]) {
        const nx = x + dirX;
        const ny = y + dirY;
        fill(image, nx, ny, originalColor, newColor);  
    }
}

const floodFill = (image, sr, sc, color) => {
    if (image[sr][sc] === color) return image;
    fill(image, sr, sc, image[sr][sc], color);
    return image;
};

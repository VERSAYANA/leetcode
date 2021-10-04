export function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  newColor: number
): number[][] {
  const changeColor = (
    oldColor: number,
    sr: number,
    sc: number,
    newColor: number
  ) => {
    image[sr][sc] = newColor;

    checkSquare(oldColor, sr + 1, sc, newColor);
    checkSquare(oldColor, sr - 1, sc, newColor);
    checkSquare(oldColor, sr, sc + 1, newColor);
    checkSquare(oldColor, sr, sc - 1, newColor);
  };

  const checkSquare = (
    oldColor: number,
    sr: number,
    sc: number,
    newColor: number
  ) => {
    if (image[sr] !== undefined && image[sr][sc] === oldColor) {
      changeColor(oldColor, sr, sc, newColor);
    }
  };

  if (image[sr][sc] === newColor) {
    return image;
  }

  changeColor(image[sr][sc], sr, sc, newColor);

  return image;
}

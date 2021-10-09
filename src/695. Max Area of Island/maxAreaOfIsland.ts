function maxAreaOfIsland(grid: number[][]): number {
  const checkedSquares: Set<number> = new Set();
  const numberOfRows = grid.length;
  const numberOfColumn = grid[0].length;
  let maxArea = 0;

  const calculateIslandArea = (
    area: number,
    rowIndex: number,
    columnIndex: number
  ): number => {
    const checkSurroundingSquare = (rowIndex: number, columnIndex: number) => {
      if (
        grid[rowIndex] !== undefined &&
        grid[rowIndex][columnIndex] === 1 &&
        !checkedSquares.has(rowIndex * numberOfColumn + columnIndex)
      ) {
        area += 1;
        checkedSquares.add(rowIndex * numberOfColumn + columnIndex);

        checkSurroundingSquare(rowIndex + 1, columnIndex);
        checkSurroundingSquare(rowIndex - 1, columnIndex);
        checkSurroundingSquare(rowIndex, columnIndex + 1);
        checkSurroundingSquare(rowIndex, columnIndex - 1);
      }
    };

    checkSurroundingSquare(rowIndex, columnIndex);

    return area;
  };

  for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    for (let columnIndex = 0; columnIndex < numberOfColumn; columnIndex++) {
      if (
        grid[rowIndex][columnIndex] === 1 &&
        !checkedSquares.has(rowIndex * numberOfColumn + columnIndex)
      ) {
        maxArea = Math.max(
          maxArea,
          calculateIslandArea(0, rowIndex, columnIndex)
        );
      }
    }
  }

  return maxArea;
}

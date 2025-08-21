let directions = [
  [2, 1],
  [1, 2],
  [-2, -1],
  [-1, -2],
  [2, -1],
  [-1, 2],
  [1, -2],
  [-2, 1],
];

function getPossibleMoves([i, j]) {
  //   debugger;
  let possibleMoves = [];
  for ([x, y] of directions) {
    let ix = i + x;
    let jy = j + y;
    if (ix >= 0 && ix <= 7 && jy >= 0 && jy <= 7) {
      possibleMoves.push([ix, jy]);
    }
  }
  console.log(`the possible moves are: ${possibleMoves}`);
  return possibleMoves;
}

getPossibleMoves([3, 3]);

function knightMoves([i, j]) {
  debugger;
  let q = [[i, j]];
  let shortestPath = [];
  let visited = Array.from({ length: 8 }, () => Array(8).fill(false));
  console.log(visited);

  while (q.length > 0) {
    let current = q.shift();
    let ci = current[0];
    let cj = current[1];

    if (visited[ci][cj] !== true) {
      const moves = getPossibleMoves(current);
      for (let [x, y] of moves) {
        if (!visited[x][y]) {
          q.push([x, y]);
        }
      }
      visited[ci][cj] = true;
    }

    console.log(`queue is : ${q}`);
  }
}

knightMoves([0, 0]);

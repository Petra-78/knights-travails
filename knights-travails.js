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
  let possibleMoves = [];
  for ([x, y] of directions) {
    let ix = i + x;
    let jy = j + y;
    if (ix >= 0 && ix <= 7 && jy >= 0 && jy <= 7) {
      possibleMoves.push([ix, jy]);
    }
  }
  return possibleMoves;
}

function knightMoves([i, j], [end, target]) {
  let q = [{ coordinate: [i, j], parent: null }];
  let shortestPath = [];
  let visited = Array.from({ length: 8 }, () => Array(8).fill(false));

  while (q.length > 0) {
    let current = q.shift();
    let ci = current.coordinate[0];
    let cj = current.coordinate[1];

    if (visited[ci][cj] !== true) {
      const moves = getPossibleMoves(current.coordinate);
      for (let [x, y] of moves) {
        if (x === end && y === target) {
          let element = { coordinate: [x, y], parent: current };
          shortestPath.push(element.coordinate);
          while (element.parent !== null) {
            element = element.parent;
            shortestPath.push(element.coordinate);
            current = current.parent;
          }
          printSteps(shortestPath);
          return shortestPath;
        }
        if (visited[x][y] !== true) {
          q.push({ coordinate: [x, y], parent: current });
        }
      }
      visited[ci][cj] = true;
    }
  }
}

function printSteps(steps) {
  //   debugger;
  console.log(`Your move took ${steps.length - 1} steps. Here is your path: `);
  for (let i = steps.length - 1; i >= 0; i--) {
    console.log(steps[i]);
  }
}

knightMoves([0, 7], [1, 1]);

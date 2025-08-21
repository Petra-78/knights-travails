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
  console.log(possibleMoves);
  return possibleMoves;
}

getPossibleMoves([3, 3]);

# Knight's Travails

A JS program for finding the shortest path on a 8x8 board from a starting position to an end target.

## Features

- Calculates the shortest sequence of moves a knight needs to reach a target square.

- Supports any start and target coordinates on an 8×8 chessboard.

- Uses a visited grid to avoid revisiting squares.

- Prints the path from start to target and the number of moves.

## How it Works

1. The knight can move in 8 possible directions (L-shaped moves).

2. BFS explores all squares reachable in 1 move, then 2 moves, etc.

3. Each square visited keeps a parent pointer to the square it came from.

4. Once the target is reached, the program traces back from the target to the start using these parent pointers to reconstruct the shortest path.

## Usage

```javascript
knightMoves([i, j], [end, target]);
```

- i, j – starting coordinates of the knight (0–7)

- end, target – target coordinates the knight should reach (0–7)

### Example:

```javascript
knightMoves([0, 7], [1, 1]);
```

### Output:

```javascript

Your move took 5 steps. Here is your path:
[0,7]
[2,6]
[0,5]
[1,3]
[2,1]
[1,1]

```

## Code Structure

- **directions** – defines the 8 possible knight moves.

- **getPossibleMoves([x, y])** – returns all valid moves from a given position, ch cecking board boundaries.

- **knightMoves([i, j], [end, target])** – BFS implementation to find shortest path.

- **visited** – a 2D array to track squares already explored.

- **printSteps(steps)** – prints the path and number of moves in order.

## Notes

- The chessboard is 0-indexed: top-left is **[0,0]**, bottom-right is **[7,7]**.

- The algorithm guarantees the shortest path because BFS explores moves in increasing order of distance.

- Currently designed for a standard **8×8 board**, but can be adapted for larger boards by changing the visited array size and boundary checks.

## Acknowledgements

- Inspired by [The Odin Project](https://www.theodinproject.com/) curriculum and challenges.

## License

MIT

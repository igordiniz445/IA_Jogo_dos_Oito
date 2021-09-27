import Puzzle from "./Puzzle"

const start = [
  [2, 7, 3],
  [5, 1, 0],
  [6, 8, 4]
]

const goal = [
  [1, 2, 3],
  [4, 0, 5],
  [6, 7, 8]
]

const p = new Puzzle(3, start, goal)

p.proccess()
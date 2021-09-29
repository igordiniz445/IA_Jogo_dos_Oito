class BFS {
  constructor (size, start, goal) {
    // sets Puzzle size
    this.n = size
    // sets start state
    this.start = new Node(start, 0, 0)
    // sets goal state
    this.goal = goal
    // open options
    this.open = []
    // closed options
    this.closed = []
    // control vars
    this.started = false
    this.finished = false
    this.solution = undefined
  }

  isGoal (cur, goal) {
    for (let i = 0; i < this.n; i++) {
      for (let j = 0; j < this.n; j++) {
        if (cur[i][j] !== goal[i][j]) {
          return false
        }
      }
    }
    return true
  }

  initiate () {
    if (this.started) return
    this.open = []
    this.closed = []
    this.open.push(this.start)
    this.started = true
  }

  proccess () {
    if (this.finished) return true
    if (this.open.length === 0) return false
    // picks best option
    const cur = this.open[0]
    // checks if cur is goal
    if (this.isGoal(cur.data, this.goal)) {
      this.finished = true
      this.solution = cur
      return true
    }
    // generate cur childs
    const temp = cur.generateChild()
    for (const i in temp) {
      const data = temp[i]
      // only add to open if not already done
      let aux = true
      for (let i in this.closed) {
        let closed = this.closed[i]
        if (this.isGoal(data.data, closed.data)) {
          aux = false
          break
        }
      }
      if (aux) this.open.push(data)
    }
    // closes cur
    this.closed.push(cur)
    this.open.splice(0, 1)
    return this.open[0].data
  }
}
class Puzzle {
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

  // gets heuristc value
  f (start) {
    return this.h(start.data, this.goal) + start.level
  }

  // gets Manhattan Distance
  h (start, goal) {
    let temp = 0
    for (let i = 0; i < this.n; i++) {
      for (let j = 0; j < this.n; j++) {
        if (start[i][j] != goal[i][j] && start[i][j] !== 0) {
          temp++
        }
      }
    }
    return temp
  }

  initiate () {
    if (this.started) return
    this.start.fval = this.f(this.start)
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
    if (cur.fval === cur.level) {
      this.finished = true
      this.solution = cur
      return true
    }
    // generate cur childs
    const temp = cur.generateChild()
    for (const i in temp) {
      const data = temp[i]
      data.fval = this.f(data)
      // only add to open if not already done
      let aux = false
      this.closed.map(el => {
        if (this.h(data.data, el.data) === 0) aux = true
      })
      if (!aux) this.open.push(data)
    }
    // closes cur
    this.closed.push(cur)
    delete this.open[0]
    // sorts best available options
    this.open.sort((a, b) => {
      if (a.fval > b.fval) return 1
      if (a.fval < b.fval) return -1
      return 0
    })
    return this.open[0].data
  }
}

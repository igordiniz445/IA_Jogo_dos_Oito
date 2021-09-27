import Node from './Node'

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
  }

  // gets heuristc value
  f (start) {
    return this.h(start.data) + start.level
  }

  // gets Manhattan Distance
  h (start) {
    let temp = 0
    for (const i in this.n) {
      for (const j in this.n) {
        if (start[i][j] != this.goal[i][j] && start[i][j] !== 0) {
          temp++
        }
      }
    }
    return temp
  }

  proccess () {
    this.start.fval = this.f(this.start)
    this.open.push(start)
    while (true) {
      // picks best option
      const cur = this.open[0]
      // print
      console.log("--------------------")
      for (const i in cur.data) {
        const data = cur.data[i]
        let str = ""
        for (const j in data) {
          const val = data[j]
          str += val + " "
        }
        console.log(str)
      }
      console.log("--------------------")
      // end print
      // checks if cur is goal
      if (this.h(cur.data) == 0) {
        break
      }
      // generate cur childs
      const temp = cur.generateChild()
      for (const i in temp) {
        const data = temp[i]
        data.fval = this.f(data)
        this.open.push(data)
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
    }
  }
}

export default Puzzle
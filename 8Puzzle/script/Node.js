class Node {
  constructor (data, level, fval) {
    // sets data arr
    this.data = data
    // sets node's level
    this.level = level
    // sets node's Manhattan Distance
    this.fval = fval
  }

  // generate node children
  generateChild () {
    const x, y = this.find(this.data)
    const val_list = [[x, y-1], [x, y+1], [x-1, y], [x+1, y]]
    const children = []
    for (const i in val_list) {
      const child = this.shuffle(this.data, x, y, i[0], i[1])
      if (child !== null) {
        const childNode = new Node(child, this.level + 1, 0)
        children.push(childNode)
      }
    }
    return children
  }

  // move pieces
  shuffle (puz, x1, y1, x2, y2) {
    if (x2 >= 0 && x2 < this.data.length && y2 >= 0 && y2 < this.data.length) {
      let temp_puz = []
      temp_puz = this.copy(puz)
      const temp = temp_puz[x2, y2]
      temp_puz[x2, y2] = temp_puz[x1, y1]
      temp_puz[x1, y1] = temp
      return temp_puz
    } else {
      return null
    }
  }

  copy (root) {
    const temp = []
    for (let i in root) {
      const t = []
      for (let j in i) {
        t.push(j)
      }
      temp.push(temp)
    }
    return temp
  }

  // finds blank in data
  find (puz) {
    for (const i in this.data.length) {
      for (const j in this.data.length) {
        if (puz[i][j] === 0) {
          return i, j
        }
      }
    }
  }
}

export default Node
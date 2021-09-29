const size = 3

class jogoDosOito {
    constructor (container) {
        this.container_element = document.querySelector(`.${container}`)
        this.matriz = [
            [1,2,3],
            [8,0,4],
            [7,6,5]
        ]
    }

    makePlay (row, col) {
        if(this.matriz[row][col] !== 0){
        }
    }

    draw () {
        let content = ''
        for(var row=0 ; row <size ;row++){
            for(var col=0 ; col < size ; col++){
                content +=`<div onclick="${this.container_element.classList[0]}.makePlay(${row}, ${col})">${this.matriz[row][col]}</div>`
            }
        }

        this.container_element.innerHTML = content
    }
}

function setRandomStart () {
    start.matriz = setRandomArr(5, start.matriz)
    start.matriz = start.matriz
    playAStar.matriz = start.matriz
    playBFS.matriz = start.matriz
    start.draw()
    playAStar.draw()
    start.draw()
    playBFS.draw()
}

function setRandomArr(it, matriz) {
    let node = new Node(matriz, 0, 0)
    const len = Math.round(Math.random() * it)
    for (let i = 0; i < len; i++) {
        let children = node.generateChild()
        let action = Math.round(Math.random() * (children.length - 1))
        node = children[action]
    }
    return node.data
}

function startPuzzle () {
    this.startPuzzleAStar()
    this.startPuzzleBFS()
}

function startPuzzleAStar () {
    if (!puzzleAStar.started || puzzleAStar.finished) {
        delete puzzleAStar
        puzzleAStar = new Puzzle(3, start.matriz, goal.matriz)
        puzzleAStar.initiate()
    }
    let temp = puzzleAStar.proccess()
    if (temp === true) {
        return true
    } else if (temp === false){
        return false
    } else {
        playAStar.matriz = temp
        playAStar.draw()
        return null
    }
}

function startPuzzleBFS () {
    if (!puzzleBFS.started || puzzleBFS.finished) {
        delete puzzleBFS
        puzzleBFS = new BFS(3, start.matriz, goal.matriz)
        puzzleBFS.initiate()
    }
    let temp = puzzleBFS.proccess()
    if (temp === true) {
        console.log(temp)
        return true
    } else if (temp === false){
        console.log(temp)
        return false
    } else {
        playBFS.matriz = temp
        playBFS.draw()
        return null
    }
}

function solvePuzzle () {
    this.solvePuzzleAStar()
    this.solvePuzzleBFS()
}

async function solvePuzzleAStar () {
    return new Promise(async () => {
        let temp
        do {
            temp = startPuzzleAStar()
            await new Promise(resolve => setTimeout(resolve, 100));
        } while (temp === null)
    })
}

async function solvePuzzleBFS () {
    return new Promise(async () => {
        let temp
        do {
            temp = startPuzzleBFS()
            await new Promise(resolve => setTimeout(resolve, 100));
        } while (temp === null)
    })
}

const start = new jogoDosOito('start')
const goal = new jogoDosOito('goal')
const playAStar = new jogoDosOito('playAStar')
const playBFS = new jogoDosOito('playBFS')
start.draw()
goal.draw()
playAStar.draw()
playBFS.draw()
let puzzleAStar = new Puzzle(3, start.matriz, goal.matriz)
let puzzleBFS = new BFS(3, start.matriz, goal.matriz)
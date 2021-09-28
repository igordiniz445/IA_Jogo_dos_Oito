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
            console.log("Cliquei no numero: ",this.matriz[row][col])
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

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

        // While there remain elements to shuffle...
        while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }

        return array;
}

function setRandomStart () {
    start.matriz = setRandomArr(size * size)
    // start.matriz = [
    //     [1, 2, 3],
    //     [0, 4, 5],
    //     [6, 7, 8]
    // ]
    play.matriz = start.matriz
    start.draw()
    play.draw()
}

function setRandomArr(size) {
    let arr = []
    for (let i = 0; i < size; i++) {
        arr.push(i)
    }
    arr = shuffle(arr)
    return [ arr.slice(0, 3), arr.slice(3, 6), arr.slice(6, 9) ]
}

function startPuzzle () {
    if (!puzzle.started || puzzle.finished) {
        delete puzzle
        puzzle = new Puzzle(3, start.matriz, goal.matriz)
        startTime = new Date().getTime()
        puzzle.initiate()
    }
    let temp = puzzle.proccess()
    if (temp === true) {
        endTime = new Date().getTime()
        alert(`Terminou após ${endTime - startTime}ms`)
    } else if (temp === false){
        alert('Falhou')
    } else {
        play.matriz = temp
        play.draw()
    }
}

function solvePuzzle () {
    if (!puzzle.started || puzzle.finished) {
        delete puzzle
        puzzle = new Puzzle(3, start.matriz, goal.matriz)
        startTime = new Date().getTime()
        puzzle.initiate()
    }
    play.matriz = puzzle.solve()
    play.draw()
    if (puzzle.finished) {
        endTime = new Date().getTime()
        alert(`Terminou após ${endTime - startTime}ms`)
    }
    else alert('Falhou')
}

const start = new jogoDosOito('start')
const goal = new jogoDosOito('goal')
const play = new jogoDosOito('play')
start.draw()
goal.draw()
play.draw()
let puzzle = new Puzzle(3, start.matriz, goal.matriz)
let startTime
let endTime
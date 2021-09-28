class jogoDosOito {
  constructor (container) {
      this.container_element = document.querySelector(`.${container}`)
      this.matriz = [
          ['1','2','3'],
          ['8','','4'],
          ['7','6','5']
      ]
  }

  makePlay (row, col) {
      if(this.matriz[row][col] !== ''){
          console.log("Cliquei no numero: ",this.matriz[row][col])
      }
      this.matriz = [
          ['2','1',''],
          ['7','3','5'],
          ['6','8','4']
      ]

      this.draw()
  }

  draw () {
      let content = ''

      for(var row=0 ; row <3 ;row++){
          for(var col=0 ; col < 3 ; col++){
              content +=`<div onclick="${this.container_element.classList[0]}.makePlay(${row}, ${col})">${this.matriz[row][col]}</div>`
          }
      }

      this.container_element.innerHTML = content
  }
}

export default jogoDosOito

class Dice {
  constructor () {
    this.value = 1
  }

  roll () {
    this.value = Math.floor((Math.random() * 6) + 1)
  }
}

let e1 = document.querySelector('.d1 div')
let e2 = document.querySelector('.d2 div')
let button = document.querySelector('.botton')

let dice = [new Dice(), new Dice()]
dice[0].roll()
dice[1].roll()
e1.className = `dice-${dice[0].value}`
e2.className = `dice-${dice[1].value}`

button.addEventListener('click', () => {
  dice[0].roll()
  dice[1].roll()
  e1.className = `dice-${dice[0].value}`
  e2.className = `dice-${dice[1].value}`
})

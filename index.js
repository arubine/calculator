const display = document.querySelector('.display')

let numberDisplayArray = []

function updateDisplay() {
  display.textContent = numberDisplayArray.join('') || 0
}

const numberBtns = document.querySelectorAll('.number')

function numberClick() {
  numberDisplayArray.push(this.textContent)
  if (numberDisplayArray.length > 14) {
    display.textContent = 'Err'
    disableNumberBtns()
    return
  }
  updateDisplay()
}

function activateNumberBtns() {
  numberBtns.forEach((button) => {
    button.addEventListener('click', numberClick)
  })
}

activateNumberBtns()

function disableNumberBtns() {
  numberBtns.forEach((button) => {
    button.removeEventListener('click', numberClick)
  })
}

const deleteBtn = document.querySelector('.delete')
deleteBtn.addEventListener('click', () => {
  numberDisplayArray.pop()
  updateDisplay()
})

const clearBtn = document.querySelector('.clear')
clearBtn.addEventListener('click', () => {
  numberDisplayArray = []
  display.textContent = 0
  activateNumberBtns()
})

const plusSign = document.querySelector('.plus')
const minusSign = document.querySelector('.minus')
const multiplySign = document.querySelector('.multiplier')
const divideSign = document.querySelector('.division')

const equalBtn = document.querySelector('.equal')

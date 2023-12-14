let currentValue = 0

let storedValue = 0

function defaultLastUsedOperator(a) {
  return a
}

let lastUsedOperator = defaultLastUsedOperator

let arrayCurrent = []

const display = document.querySelector('.display')

let displayValue

function updateDisplay() {
  displayValue = arrayCurrent.join('') || storedValue
  display.textContent = displayValue
  currentValue = +displayValue
  const testString = `${display.textContent}`
  if (testString.length > 10) {
    display.textContent = 'Error'
    deactivateBtns()
  }
}

function createNumberBtn() {
  arrayCurrent.push(this.textContent)
  updateDisplay()
}
const numberBtns = document.querySelectorAll('.number')

numberBtns.forEach((button) => {
  button.addEventListener('click', createNumberBtn)
})

function add(a, b) {
  return a + b
}
function subtract(a, b) {
  return b - a
}
function multiply(a, b) {
  return a * b
}
function divide(a, b) {
  return b / a
}

function operate() {
  storedValue = lastUsedOperator(currentValue, storedValue)
  arrayCurrent = []
  const storedValueString = `${storedValue}`
  if (storedValueString.length > 10) {
    console.log(storedValueString.length)
    storedValue = (+storedValueString).toFixed(
      storedValueString.length - 15
    )
  }
  updateDisplay()
  periodBtn.style['pointer-events'] = 'auto'
  lastUsedOperator = defaultLastUsedOperator
}
const equalBtn = document.querySelector('#equal')
equalBtn.addEventListener('click', () => {
  operate()
})

const plusBtn = document.querySelector('.plus')
plusBtn.addEventListener('click', () => {
  operate()
  lastUsedOperator = add
})

const minusBtn = document.querySelector('.minus')
minusBtn.addEventListener('click', () => {
  operate()
  lastUsedOperator = subtract
})

const multiplyBtn = document.querySelector('.multiplier')
multiplyBtn.addEventListener('click', () => {
  operate()
  lastUsedOperator = multiply
})

const divideBtn = document.querySelector('.division')
divideBtn.addEventListener('click', () => {
  operate()
  lastUsedOperator = divide
})

const plusMinusBtn = document.querySelector('.plus-minus')
plusMinusBtn.addEventListener('click', () => {
  currentValue = currentValue * -1
  display.textContent = currentValue
})

const allBtns = document.querySelectorAll(
  '.operation, .number'
)

function deactivateBtns() {
  allBtns.forEach((button) => {
    button.style['pointer-events'] = 'none'
  })
}

const clearBtn = document.querySelector('.clear')
clearBtn.addEventListener('click', () => {
  allBtns.forEach((button) => {
    button.style['pointer-events'] = 'auto'
  })
  currentValue = 0
  storedValue = 0
  arrayCurrent = []
  updateDisplay()
})

const deleteBtn = document.querySelector('.delete')
deleteBtn.addEventListener('click', () => {
  arrayCurrent.pop()
  display.textContent = arrayCurrent.join('') || 0
  currentValue = +display.textContent
})

const periodBtn = document.querySelector('.period')
periodBtn.addEventListener('click', () => {
  arrayCurrent.push('.')
  periodBtn.style['pointer-events'] = 'none'
  display.textContent = arrayCurrent.join('')
  currentValue = +display.textContent
})

const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
    calculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number")

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        updateScreen(event.target.value)  
    })
})

let prevNumber = ''
let calculatorOperator = ''
let currentNumber = '0'

numbers.forEach ((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

const inputNumber = (number) => {
  if (currentNumber === '0') {
    currentNumber = number
  } else {
    currentNumber += number
  }
}

const operators = document.querySelectorAll (".operator") 

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

inputOperator = (operator) => {
    prevNumber = currentNumber
    calculatorOperator = operator
    currentNumber = ''
}

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
})

const calculate = () => {
    let result = ''
    switch(calculatorOperator) {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case '-':
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case '*':
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case '/':
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        default:
            break
    }
    currentNumber = result
    calculatorOperator = ''
}

const clearAll = () => {
    prevNumber =''
    calculatorOperator = ''
    currentNumber = '0'
}


const clearBtn = document.querySelector(".all-clear")
clearBtn.addEventListener("click", () => {
 clearAll()
 updateScreen(currentNumber)
})

inputDesimal = (dot) => {
    if (currentNumber.includes ('.'))
 {
     return
 }    currentNumber += dot
}

const decimal = document.querySelector(".decimal")

decimal.addEventListener("click", (event) => {
    inputDesimal (event.target.value)
    updateScreen(currentNumber)
})

const percentage = document.querySelector('.percentage')

inputPercentage = () => {
    if (currentNumber.includes('%')) {
        prevNumber = currentNumber
    }
    currentNumber /= 100
}

percentage.addEventListener('click', (event) => {
    inputPercentage(event.target.value)
    updateScreen(currentNumber)
})
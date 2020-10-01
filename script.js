let prevInput = '0'
let calculationOperator = ''
let currentInput = '0'
var stack = [];
const inputNumber = (number) => {
  if (currentInput === '0') {
    currentInput = number
  } else {
    currentInput += number
  }
}

const inputOperator = (operator) => {
  if (calculationOperator === '') {
    prevInput = currentInput
  }
  calculationOperator = operator
  currentInput = '0'
}

const inputDecimal = (dot) => {
  if(currentInput.includes('.')) {
    return
  }
  currentInput += dot

}

const getPercentage = () => {
  var m = currentInput
  currentInput = currentInput / 100
  stack.push(m+'%'+100);
}
const getSquareroot = () => {
  m = currentInput
  currentInput=Math.pow(currentInput,0.5) 
  stack.push('root'+'('+m+')');
}
const getlog = () => {
  m=currentInput
  currentInput=Math.log(currentInput)
  stack.push('Log('+m+')')
}
const calculate = () => {
  let result = 0
  switch(calculationOperator) {
    case '+':
      result = parseFloat(prevInput) + parseFloat(currentInput)
      stack.push(prevInput +'+'+ currentInput);
      break
    case '-':
      result = parseFloat(prevInput) - parseFloat(currentInput)
      stack.push(prevInput +'-'+ currentInput);
      break
    case '*':
      result = parseFloat(prevInput) * parseFloat(currentInput)
      stack.push(prevInput +'*'+ currentInput);
      break
    case '/':
      result = parseFloat(prevInput) / parseFloat(currentInput)
      stack.push(prevInput +'/'+ currentInput);
      break 
    case '^':
      result = Math.pow(parseFloat(prevInput),parseFloat(currentInput))
      stack.push(prevInput +'^'+ currentInput);
      break
    default:
      return
  }
  currentInput = result.toString()
  calculationOperator = ''
  prevInput = '0'
}

const clearAll = () => {
  prevInput = '0'
  calculationOperator = ''
  currentInput = '0'
}

const calculatorScreen = document.querySelector(".calculator-screen")
const updateScreen = (number) => {
  calculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number")

numbers.forEach((number) => {
  number.addEventListener(("click"), (event) => {
    inputNumber(event.target.value)
    updateScreen(currentInput)
  })
})

const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value)
  })
})

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener("click", () => {
  calculate()
  updateScreen(currentInput)
})

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener("click", () => {
  clearAll()
  updateScreen(currentInput)
})

const decimal = document.querySelector(".decimal")

decimal.addEventListener("click", (event) => {
  inputDecimal(event.target.value)
  updateScreen(currentInput)
})

const percentage = document.querySelector(".percentage")

percentage.addEventListener("click", (event) => {
  getPercentage()
  updateScreen(currentInput)
})
const squareroot = document.querySelector(".squareroot")

squareroot.addEventListener("click",(event) => {
  getSquareroot()
  updateScreen(currentInput)
})
const log = document.querySelector(".Logarithm")

log.addEventListener("click",(event) => {
  getlog()
  updateScreen(currentInput)
})
const prev = document.querySelector(".action")

prev.addEventListener("click",(event) => {
  var i = stack.pop();
  updateScreen(i)
})
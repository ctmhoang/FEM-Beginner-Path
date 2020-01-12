const screen = document.querySelector('.display-screen');
let buffer = '0',
  tot = 0,
  operator;

function getData(value) {
  if (isNaN(value)) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
  displayTot();
}

function handleNumber(value) {
  if (buffer !== '0') {
    buffer += value;
  } else {
    if (value !== '0') {
      buffer = value;
    }
  }
}

function handleSymbol(value) {
  switch (value) {
    case 'C':
      buffer = '0';
      tot = 0;
      break;
    case '←':
      if (buffer.length === 1) {
        buffer = '0';
      } else {
        buffer = buffer.substr(0, buffer.length - 1);
      }
      break;
    case '=':
      if (tot === 0) {
        // tot will be initialized when a operator is clicked
        // No tot No calculate 
        return;
      }
      getNewBuffer(tot, buffer);
      operator = undefined;
      break;
    default:
      if (operator === undefined) {
        tot = parseInt(buffer);
      } else {
        tot = mathItUp[operator](tot, parseInt(buffer))
      }
      buffer = '';
      operator = value;
  }

  function getNewBuffer(total, currentNumber) {
    tot = mathItUp[operator](tot, parseInt(buffer));
    buffer = tot;
  }
}

const mathItUp = {
  '+': function (x, y) {
    return x + y
  },
  '-': function (x, y) {
    return x - y
  },
  '×': function (x, y) {
    return x * y
  },
  '÷': function (x, y) {
    return x / y
  }
}

function displayTot() {
  screen.innerText = buffer;
}

document.querySelector('.cal-box').addEventListener('click', function (event) {
  if (event.target.tagName === 'BUTTON') {
    getData(event.target.innerText);
  }
  event.stopPropagation();
})


// Write a function that puts the value of the div on the screen
var number = ""
var number1 = null;
var number2 = null;
var num1 = null;
var num2 = null;
var casey = null;

function input(event) {
  var value = $(event.target).text()
  // AC should clear the screen
  if (value === 'AC') {
    $('#screen').text(" ")
    number = " ";
  } else if (value === '÷' ) {
    getNum();
    console.log('divide');
    $('#screen').text(value)
    casey = "d";
  } else if (value === '+') {
    getNum();
    console.log('add');
    $('#screen').text(value)
    casey = "a";
  } else if (value === 'X') {
    getNum();
    console.log('multiply');
    $('#screen').text(value)
    casey = "m";
  } else if (value === '-') {
    getNum();
    console.log('subtract');
    $('#screen').text(value)
    casey = "s";
  } else if (value === "=") {
    number2 = number;
    num2 = parseFloat(number2);
    solution();
  } else {
    console.log(value)
    number += value;
    $('#screen').text(number)
  }
}

$('.flex-container').click(input)


var calculator = {

  add: function(num1, num2) {
    return num1 + num2;
  },

  subtract: function(num1, num2) {
    return num1 - num2;
  },

  multiply: function(num1, num2) {
    return num1*num2;
  },

  divide: function(num1, num2) {
    return num1/num2;
  }
}


function getNum() {
  number1 = number;
  num1 = parseFloat(number1);
  number = " ";
}

function solution() {
  var answer;
  if (casey === "a") {
    answer = num1 + num2;
    calculator.add(num1, num2)
  } else if (casey === "s") {
    answer = num1 - num2;
    calculator.subtract(num1, num2)
  } else if (casey === "m") {
    answer = num1 * num2;
    calculator.multiply(num1, num2)
  } else {
    answer = num1 / num2;
    calculator.divide(num1, num2)
  }
  $('#screen').text(answer)
  num1 = answer;
  return answer;
}

// $('#equals').click(solution)



// Trevor solution
'use strict'

(() => {

  class Calculator {
    constructor() {
      this.operand1 = 0 ;
      this.operand2 = 0;
      this.operator = null;
    }
    and() {
      return this.operand1 + this.operand2;
    }
    subtract() {
      return this.operand1 - this.operand2;
    }
    multiply() {
      return this.operand1 * this.operand2;
    }
    divide() {
      return this.operand1 / this.operand2;
    }
    clear() {
      this.operand1 = 0;
      this.operand2 = 0;
      this.operator = null;
    }
  }

  const calculator = new Calculator();

  $('operand').on('click', function(){
    let value = $(this).text();
    if ($('#display').text() === '0' && !== '.') {
      $('#display').text(value);
    } else {
      $('#display').text($('#display').text() + value)
    }
  });

// gettung some operator functionality out of the calculator
  $('.operator').on('click', function() {
    let operator = $(this).text();
    calculator.operator = operator;
    calculator.operand1 = parseInt($('#display').text());
    $('#display').text(0);
  });

  $('#clear').on('click', function() {
    $('#display').text(0);
    calculator.clear();
  })

// Doing the math!
  $('#equals').on('click', function() {
    if(calculator.operator) {
      let result;
      calculator.operand2 = parseInt($('#display').text());
      switch(calculator.operator) {
        case '/':
          result = calculator.divde();
          break;
        case 'X': //this is not an X is it a special character
          result = calculator.multiply();
          break;
        case '+':
          result = calculator.add();
          break;
        case '-':
          result = calculator.subtract();
          break;
      }
      $('#display').text(result);
      calculator.operand1 = result;
      calculator.operand2 = 0;
      calculator.operator = null;
    }
  })

})();

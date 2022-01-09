"use strict";
const inputFirst = document.querySelector(".form-input_one");
const inputSecond = document.querySelector(".form-input_second");
// console.log(inputFirst);
const btnAdd = document.querySelector(".btn-add");
const btnMinus = document.querySelector(".btn-minus");
const btnMultiple = document.querySelector(".btn-multiple");
const btnDivide = document.querySelector(".btn-divide");

const process = document.querySelector(".example");
const result = document.querySelector(".outcome-result");

function outputResult(currentResult, calcDescription) {
	result.textContent = currentResult;
	process.textContent = calcDescription;
}
outputResult(0, 0);

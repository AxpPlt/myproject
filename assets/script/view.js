"use strict";
const inputFirst = document.querySelector(".form-input_one");
const inputSecond = document.querySelector(".form-input_second");
// console.log(inputFirst);
const btnAdd = document.querySelector(".btn-add");
const btnMinus = document.querySelector(".btn-minus");
const btnMultiple = document.querySelector(".btn-multiple");
const btnDivide = document.querySelector(".btn-divide");
// console.log(btnAdd.textContent);

const process = document.querySelector(".example");
const result = document.querySelector(".outcome-result");
const prevResultUserView = document.querySelector(".pretResult");

function outputResult(currentResult, processUser, prevResultUser) {
	result.textContent = currentResult;
	process.textContent = processUser;
	prevResultUserView.textContent = prevResultUser;
}

"use strict";
let defaultResult = 0;
let currentResult = defaultResult;
let mathOperator;
function getUserNumberInputFirst() {
	return parseInt(inputFirst.value);
}
function getUserNumberInputSecond() {
	return parseInt(inputSecond.value);
}
function outPutUserResult(resultBeforeCalc, operator, userNumber, prevResultUser) {
	const processUser = `${resultBeforeCalc} ${operator} ${userNumber}`;
	outputResult(currentResult, processUser, prevResultUser);
}
function calculateUser(operatorType) {
	const userNumberFirst = getUserNumberInputFirst();
	const userNumberSecond = getUserNumberInputSecond();
	const prevResult = currentResult;

	switch (operatorType) {
		case "ADD":
			currentResult = userNumberFirst + userNumberSecond;
			mathOperator = "+";
			break;
		case "MIN":
			currentResult = userNumberFirst - userNumberSecond;
			mathOperator = "-";
			break;
		case "MUL":
			currentResult = userNumberFirst * userNumberSecond;
			mathOperator = "*";
			break;
		case "DIV":
			currentResult = userNumberFirst / userNumberSecond;
			mathOperator = "/";
			break;
	}
	outPutUserResult(userNumberFirst, mathOperator, userNumberSecond, prevResult);
}
function add() {
	calculateUser("ADD");
}
function min() {
	calculateUser("MIN");
}
function mul() {
	calculateUser("MUL");
}
function div() {
	calculateUser("DIV");
}
btnAdd.addEventListener("click", add);
btnMinus.addEventListener("click", min);
btnMultiple.addEventListener("click", mul);
btnDivide.addEventListener("click", div);

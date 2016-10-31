var inputElement = document.getElementById('js-inputElement');
var btnSubmit = document.getElementById('js-btnSubmit');
var randomNumber = Math.floor((Math.random() * 100) + 1);

function checkNumber() {

	resetMessage();

	var inputValue = inputElement.value;

	if (inputValue == randomNumber) {
		return setMessage("Perfect! You guessed!");
	}
	if ((inputValue > randomNumber) && (inputValue < 101)) {
		return setMessage("The number is too large!");
	}
	if ((inputValue < randomNumber) && (inputValue >= 0)) {
		return setMessage("The number is too small!");
	}
	return setMessage("String which you typed is not the number from our compartment!");
}

function resetMessage() {
	var elementToRemove = document.getElementsByClassName('message')[0];
	if (elementToRemove) {
		elementToRemove.parentElement.removeChild(elementToRemove);
	}
}

function setMessage(message) {
	var p = document.createElement('p');
	var container = document.getElementById('container');
	var text = document.createTextNode(message);

	p.classList.add('message')
	p.appendChild(text);
	container.appendChild(p);
}

function clearText() {
	inputElement.value = "";
}

btnSubmit.addEventListener('click', function () {
	checkNumber();
	clearText();
});

inputElement.addEventListener('keypress', function (event) {
	if (event.keyCode == 13) {
		event.preventDefault();
		checkNumber();
		clearText();
	}
});
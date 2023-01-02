const passwordEl = document.querySelector('.password');
const btnGenerate = document.querySelector('.btn-pass');
const btnCopy = document.querySelector('.btn-copy');

passwordEl.addEventListener('keydown', (event) => {
	event.preventDefault();
})

btnCopy.addEventListener('click', (event) => {
	passwordEl.select();
	passwordEl.setSelectionRange(0, 99999);
	navigator.clipboard.writeText(passwordEl.value);
	passwordEl.blur();
	btnCopy.textContent = 'Скопировано!';
});

btnGenerate.addEventListener('click', (event) => {
	let password = generatePassword(12);
	passwordEl.value = password;
	btnCopy.textContent = 'Скопировать';
});

function generatePassword(passwordLength) {
	const numberChars = "0123456789";
	const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	const lowerChars = "abcdefghijklmnopqrstuvwxyz";
	const symbolChars = "!@#$%^&*()_+";
	const allChars = numberChars + upperChars + lowerChars + symbolChars

	let randomString = '';

	for (let i = 0; i < passwordLength; i++) {
		let randomNumber = Math.floor(Math.random() * allChars.length)
		randomString += allChars[randomNumber];
	}
	return randomString;
}
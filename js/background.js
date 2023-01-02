const btnBg = document.querySelector('#btn-bg');
const color = document.querySelector('.color');
const header = document.querySelector('.header');
const checkbox = document.querySelector('.custom-checkbox');
const bg = btnBg.previousElementSibling;


const hex = [
	"0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "A", "B", "C", "D", "E", "F",
]

btnBg.addEventListener('click', () => {
	if (checkbox.checked) {
		let hexColor = generateHex();
		bg.style.backgroundColor = hexColor;
		bg.style.color = `var(--primary)`;
		color.textContent = hexColor;
		header.style.backgroundColor = hexColor;
	} else {
		let hexColor = generateHex();
		bg.style.backgroundColor = hexColor;
		color.textContent = hexColor;
	}
})

function generateHex() {
	let hexColor = "#";
	for (let i = 0; i < 6; i++) {
		hexColor += hex[getRandomNumber()]
	}

	return hexColor;
}

function getRandomNumber() {
	return Math.floor(Math.random() * hex.length);
}

header.addEventListener('click', () => {
	header.style.backgroundColor = 'var(--primary)';
})
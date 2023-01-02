const board = document.querySelector('#board');
const colors = ['#36BBCE', '#3E94D1', '#8443D6', '#D235D2', '#F13C73'];
const SQUARES_NUMBER = 720;


for (let i = 0; i < SQUARES_NUMBER; i++) {
	const square = document.createElement('div');
	square.classList.add('square');

	square.addEventListener('mouseover', setColor);
	square.addEventListener('mouseleave', removeColor);
	board.append(square);
//////// my test
	board.addEventListener('click', (event) => {
		if(event.target === square) {
			square.classList.toggle('clicked');
		}
	})
	
}

function setColor(event) {
	const element = event.target;
	const color = getRandomColor();
	if(element.classList.contains('clicked')) {
		return
	} else {
		element.style.backgroundColor = color;
		element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
	}
}

function removeColor(event) {
		const element = event.target;
		if(element.classList.contains('clicked')) {
			return
		} else {
			element.style.backgroundColor = '#fff';
			element.style.boxShadow = '0 0 2px #000';
		}
}

function getRandomColor() {
	return colors[Math.floor(Math.random() * colors.length)];
}


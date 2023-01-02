const button = document.querySelector('.random-cat__btn');
const image = document.querySelector('.random-cat__card img');
const card = document.querySelector('.random-cat__card');
const url = 'https://aws.random.cat/meow';
let isLoaded;

const loader = document.createElement('div');
loader.classList.add('loader');

async function fetchHandler() {
	try {
		const response = await fetch(url);
		const data = await response.json();
		image.src = data.file;
	} catch (error) {
		console.log(error);
	}
}

button.addEventListener('click', () => {
	isLoaded = image.complete;
	button.textContent = 'LOADING...';
	image.classList.add('loading');
	card.append(loader);
	if (isLoaded) {
		fetchHandler();
	}
})

image.onload = function () {
	button.textContent = 'RANDOM CAT';
	loader.remove();
	image.classList.remove('loading');
}
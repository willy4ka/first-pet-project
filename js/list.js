const tasksListElement = document.querySelector(`.tasks__list`);
const taskBtn = document.querySelector('.tasks__btn');
const input = document.querySelector('.tasks__input');
let taskElements = tasksListElement.querySelectorAll(`.tasks__item`);

// Добавление задачи при клике на кнопку
taskBtn.addEventListener('click', function () {
	const item = `<li class="tasks__item">${input.value}
	<div class="btn-delete" data-action="delete">&times;</div>
	</li>`;
	//document.createElement('li');
	tasksListElement.insertAdjacentHTML('beforeend', item);
	input.value = '';
	taskElements = tasksListElement.querySelectorAll(`.tasks__item`);
	updateList ();
})

function updateList() {
	// Перебираем все элементы списка и присваиваем значение
	for (const task of taskElements) {
		task.draggable = true;
	}
	tasksListElement.addEventListener(`dragstart`, (evt) => {
		evt.target.classList.add(`selected`);
	})
	tasksListElement.addEventListener(`dragend`, (evt) => {
		evt.target.classList.remove(`selected`);
	});

	tasksListElement.addEventListener(`dragover`, (evt) => {
		evt.preventDefault();
		const activeElement = tasksListElement.querySelector(`.selected`);
		const currentElement = evt.target;
		const isMoveable = activeElement !== currentElement && currentElement.classList.contains(`tasks__item`);
	 
		if (!isMoveable) {
		  return;
		}
	 
		// evt.clientY — вертикальная координата курсора в момент, когда сработало событие
		const nextElement = getNextElement(evt.clientY, currentElement);
	 
		// Проверяем, нужно ли менять элементы местами
		if (
		  nextElement && 
		  activeElement === nextElement.previousElementSibling ||
		  activeElement === nextElement
		) {
		  // Если нет, выходим из функции, чтобы избежать лишних изменений в DOM
		  return;
		}
	 
		tasksListElement.insertBefore(activeElement, nextElement);
	 });
}

	tasksListElement.addEventListener('click', (evt) => {
		target = evt.target;
		if(target.dataset.action === 'delete') {
			console.log('test');
			target.closest('.tasks__item').remove();
		}
	})
updateList();

const getNextElement = (cursorPosition, currentElement) => {
	// Получаем объект с размерами и координатами
	const currentElementCoord = currentElement.getBoundingClientRect();
	// Находим вертикальную координату центра текущего элемента
	const currentElementCenter = currentElementCoord.y + currentElementCoord.height / 2;
 
	// Если курсор выше центра элемента, возвращаем текущий элемент
	// В ином случае — следующий DOM-элемент
	const nextElement = (cursorPosition < currentElementCenter) ?
		 currentElement :
		 currentElement.nextElementSibling;
 
	return nextElement;
 };

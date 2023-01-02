// Чтобы повесить обработчики события на все кнопки, а не одну - во-1, querySelectorAll, а во-2 перебирать массив через forEach
const openModal = document.querySelector('.modal-letter'),
	modal = document.querySelector('.popup'),
	overlay = document.querySelector('.overlay'),
	closeModal = document.querySelector('.close-modal');
// Обработчики _____
openModal.addEventListener('click', showModal);
closeModal.addEventListener('click', hideModal);
overlay.addEventListener('click', hideModal);
document.addEventListener('keydown', (e) => {
	if (e.code === 'Escape' && (modal.classList.contains('open'))) {
		hideModal();
	}
})
// Открыть модальное окно _____
function showModal() {
	modal.classList.add('open');
	overlay.classList.add('open');
	document.body.style.overflow = 'hidden';
}
// Закрыть модальное окно _____
function hideModal() {
	modal.classList.remove('open');
	overlay.classList.remove('open');
	document.body.style.overflow = 'auto';
}
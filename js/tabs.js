	const tabsParent = document.querySelector('.tabheader__wrapper'),
			tabs = document.querySelectorAll('.tabheader__item'),
			tabsContent = document.querySelectorAll('.tabcontent');

	function hideTabContent() {
		tabsContent.forEach(item => {
			item.style.display = 'none';
		});

		tabs.forEach(item => {
			item.classList.remove('tabheader__item--active');
		});
	}


	function showTabContent(i = 0) {
		tabsContent[i].style.display = 'block';
		tabsContent[i].classList.remove('hide');
		tabs[i].classList.add('tabheader__item--active');
	}

	hideTabContent();
	showTabContent();

	tabsParent.addEventListener('click', (event) => {
		const target = event.target;

		if (target && target.classList.contains('tabheader__item')) {
			tabs.forEach((item, i) => {
				if (target == item) {
					hideTabContent();
					showTabContent(i);

				}
			});
		}
	})
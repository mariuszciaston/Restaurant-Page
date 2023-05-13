import addHeaderContent from './header';
import addHomeContent from './home';
import addMenuContent from './menu';
import addContactContent from './contact';
import addFooterContent from './footer';

const content = document.querySelector('#content');
const main = document.createElement('main');
main.classList.add('main');
content.appendChild(main);

addHeaderContent();

const navButtons = document.querySelectorAll('.nav-button');
const homeBtn = document.querySelector('#homeBtn');
const menuBtn = document.querySelector('#menuBtn');
const contactBtn = document.querySelector('#contactBtn');

addHomeContent();

navButtons.forEach((btn) => {
	btn.addEventListener('click', () => {
		navButtons.forEach((btn) => btn.classList.remove('active'));
		main.textContent = '';

		btn.classList.add('active');

		if (homeBtn.classList.contains('active')) {
			addHomeContent();
		} else if (menuBtn.classList.contains('active')) {
			addMenuContent();
		} else if (contactBtn.classList.contains('active')) {
			addContactContent();
		}
	});
});

addFooterContent();

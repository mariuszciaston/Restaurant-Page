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

function reloadContent() {
	if (homeBtn.classList.contains('active')) {
		addHomeContent();
	} else if (menuBtn.classList.contains('active')) {
		addMenuContent();
	} else if (contactBtn.classList.contains('active')) {
		addContactContent();
	}
}

reloadContent();

navButtons.forEach((btn) => {
	btn.addEventListener('click', () => {
		if (!btn.classList.contains('active')) {
			navButtons.forEach((btn2) => btn2.classList.remove('active'));
			btn.classList.add('active');
			main.textContent = '';
			reloadContent();
		}
	});
});

addFooterContent();

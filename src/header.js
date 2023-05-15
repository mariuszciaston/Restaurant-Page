export default function addHeaderContent() {
	const content = document.querySelector('#content');
	const header = document.createElement('header');
	const h1 = document.createElement('h1');
	const nav = document.createElement('nav');
	const homeBtn = document.createElement('button');
	const menuBtn = document.createElement('button');
	const contactBtn = document.createElement('button');
	const span = document.createElement('span');

	header.className = 'header';
	span.className = 'accent';
	span.innerText = 'BATMAN';
	h1.appendChild(span);
	h1.innerHTML += ' Pizza';

	nav.className = 'nav';

	homeBtn.id = 'homeBtn';
	homeBtn.className = 'nav-button active';
	homeBtn.innerText = 'HOME';

	menuBtn.id = 'menuBtn';
	menuBtn.className = 'nav-button';
	menuBtn.innerText = 'MENU';

	contactBtn.id = 'contactBtn';
	contactBtn.className = 'nav-button';
	contactBtn.innerText = 'CONTACT';

	header.appendChild(h1);
	nav.appendChild(homeBtn);
	nav.appendChild(menuBtn);
	nav.appendChild(contactBtn);
	header.appendChild(nav);
	document.body.appendChild(header);
	content.appendChild(header);
}

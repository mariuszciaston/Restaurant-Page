export default function addHeaderContent() {
	const content = document.querySelector('#content');

	const header = document.createElement('header');
	header.className = 'header';
	header.innerText = 'Headline';

	const nav = document.createElement('nav');
	nav.className = 'nav';

	const homeBtn = document.createElement('button');
	homeBtn.id = 'homeBtn';
	homeBtn.className = 'nav-button active';
	homeBtn.innerText = 'Home';

	const menuBtn = document.createElement('button');
	menuBtn.id = 'menuBtn';
	menuBtn.className = 'nav-button';
	menuBtn.innerText = 'Menu';

	const contactBtn = document.createElement('button');
	contactBtn.id = 'contactBtn';
	contactBtn.className = 'nav-button';
	contactBtn.innerText = 'Contact';

	nav.appendChild(homeBtn);
	nav.appendChild(menuBtn);
	nav.appendChild(contactBtn);

	header.appendChild(nav);

	document.body.appendChild(header);

	content.appendChild(header);
}

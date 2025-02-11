export default function addFooterContent() {
	const content = document.querySelector('#content');
	const footer = document.createElement('footer');
	const span1 = document.createElement('span');
	const span2 = document.createElement('span');
	const link = document.createElement('a');
	const icon = document.createElement('i');

	footer.className = 'footer';

	link.href = 'https://github.com/mariuszciaston/';
	link.target = '_blank';
	link.rel = 'noopener';
	icon.className = 'fab fa-github fa-2x';
	icon.setAttribute('aria-hidden', 'true');
	link.appendChild(icon);

	span2.appendChild(document.createTextNode('\u00A0'));
	span2.appendChild(document.createTextNode('Mariusz Ciastoń 2023 '));
	span2.appendChild(document.createTextNode('\u00A0'));
	span2.appendChild(link);

	footer.appendChild(span1);
	footer.appendChild(span2);
	content.appendChild(footer);
}

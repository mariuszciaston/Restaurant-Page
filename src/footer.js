export default function addFooterContent() {
	const content = document.querySelector('#content');
	const footer = document.createElement('footer');
	footer.className = 'footer';
	footer.textContent = 'Footer';
	content.appendChild(footer);
}

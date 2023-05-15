export default function addMenuContent() {
	const content = document.querySelector('#content');
	const main = document.querySelector('.main');
	const menuDiv = document.createElement('div');
	const footer = document.querySelector('.footer');

	menuDiv.className = 'menu';
	menuDiv.textContent = 'Check out our menu for a wide selection of pizzas:';

	main.appendChild(menuDiv);
	content.insertBefore(main, footer);
}

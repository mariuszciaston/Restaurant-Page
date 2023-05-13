export default function addHomeContent() {
	const content = document.querySelector('#content');
	const main = document.querySelector('.main');
	const homeDiv = document.createElement('div');
	homeDiv.className = 'home';
	homeDiv.textContent = 'Our restaurant is known for its delicious pizzas made with fresh ingredients. Come and taste the difference!';
	main.appendChild(homeDiv);
	const footer = document.querySelector('.footer');
	content.insertBefore(main, footer);
}

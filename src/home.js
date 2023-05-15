export default function addHomeContent() {
	const content = document.querySelector('#content');
	const main = document.querySelector('.main');
	const homeDiv = document.createElement('div');
	const homeParagraph = document.createElement('p');
	const homeImage = document.createElement('img');
	const footer = document.querySelector('.footer');

	homeDiv.className = 'home';
	homeParagraph.textContent =
		"Welcome to Batman Pizza! Our restaurant is known for it's delicious pizzas made with fresh ingredients. Come and taste the difference! Unleash your inner Batman!";
	homeImage.src = 'img/home.jpg';

	main.appendChild(homeDiv);
	homeDiv.appendChild(homeParagraph);
	homeDiv.appendChild(homeImage);
	content.insertBefore(main, footer);
}

export default function addContactContent() {
	const content = document.querySelector('#content');
	const main = document.querySelector('.main');
	const contactDiv = document.createElement('div');
	const footer = document.querySelector('.footer');

	contactDiv.className = 'contact';
	contactDiv.textContent = 'Have any questions or want to make a reservation? Contact us using the information below.';

	main.appendChild(contactDiv);
	content.insertBefore(main, footer);
}

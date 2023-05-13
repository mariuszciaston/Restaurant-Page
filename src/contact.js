export default function addContactContent() {
	const content = document.querySelector('#content');
	const main = document.querySelector('.main');
	const contactDiv = document.createElement('div');
	contactDiv.className = 'contact';
	contactDiv.textContent = 'Have any questions or want to make a reservation? Contact us using the information below.';
	main.appendChild(contactDiv);
	const footer = document.querySelector('.footer');
	content.insertBefore(main, footer);
}

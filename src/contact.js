export default function addContactContent() {


	// const content = document.querySelector('#content');
	// const main = document.querySelector('.main');
	// const contact = document.createElement('div');
	// const footer = document.querySelector('.footer');

	// contact.className = 'contact';
	// contact.textContent = 'Have any questions or want to make a reservation? Contact us using the information below.';

	// main.appendChild(contact);
	// content.insertBefore(main, footer);









	const content = document.querySelector('#content');
	const main = document.querySelector('.main');
	const contactDiv = document.createElement('div');
	const contactParagraph = document.createElement('p');
	
	const footer = document.querySelector('.footer');

	contactDiv.className = 'contact';
	contactParagraph.textContent = 'Have any questions or want to make a reservation? Contact us using the information below.';
	

	main.appendChild(contactDiv);
	contactDiv.appendChild(contactParagraph);
	content.insertBefore(main, footer);
}

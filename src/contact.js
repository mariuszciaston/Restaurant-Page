export default function addContactContent() {
	const content = document.querySelector('#content');
	const main = document.querySelector('.main');
	const footer = document.querySelector('.footer');

	const contactDiv = document.createElement('div');
	contactDiv.className = 'contact';

	const contactSectionDiv = document.createElement('div');
	contactSectionDiv.className = 'contact-section';
	contactDiv.appendChild(contactSectionDiv);

	const contactUsDiv = document.createElement('div');
	contactUsDiv.className = 'contact-us';
	contactSectionDiv.appendChild(contactUsDiv);

	const contactUsP = document.createElement('p');
	contactUsP.className = 'bold';
	contactUsP.textContent = 'Contact us:';
	contactUsDiv.appendChild(contactUsP);

	const telDiv = document.createElement('div');
	telDiv.className = 'tel';
	telDiv.textContent = 'tel. 111 222 333';
	contactUsDiv.appendChild(telDiv);

	const emailDiv = document.createElement('div');
	emailDiv.className = 'email';
	emailDiv.textContent = 'batman@batmanpizza.eat';
	contactUsDiv.appendChild(emailDiv);

	const contactFormButton = document.createElement('button');
	contactFormButton.className = 'button';
	contactFormButton.textContent = 'CONTACT FORM';
	contactUsDiv.appendChild(contactFormButton);

	const addressDiv = document.createElement('div');
	addressDiv.className = 'address';
	contactSectionDiv.appendChild(addressDiv);

	const addressP = document.createElement('p');
	addressP.className = 'bold';
	addressP.textContent = 'Address:';
	addressDiv.appendChild(addressP);

	const streetDiv = document.createElement('div');
	streetDiv.className = 'street';
	streetDiv.innerHTML = 'This is Example Street 123, <br> Cracow 31-123';
	addressDiv.appendChild(streetDiv);

	const bookTableButton = document.createElement('button');
	bookTableButton.className = 'button';
	bookTableButton.textContent = 'BOOK A TABLE';
	addressDiv.appendChild(bookTableButton);

	const mapIframe = document.createElement('iframe');
	mapIframe.className = 'map';
	mapIframe.src =
		'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5122.60490993847!2d19.931358369257417!3d50.06189710000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b120455da67%3A0xc3c7f5071b750d33!2zUnluZWsgR8WCw7N3bnk!5e0!3m2!1spl!2spl!4v1684245375628!5m2!1spl!2spl';
	mapIframe.style.border = 0;
	mapIframe.allowFullscreen = true;
	mapIframe.loading = 'lazy';
	mapIframe.referrerPolicy = 'no-referrer-when-downgrade';
	mapIframe.style.filter = 'grayscale(100%) invert(100%)';
	contactDiv.appendChild(mapIframe);

	main.appendChild(contactDiv);
	content.insertBefore(main, footer);
}

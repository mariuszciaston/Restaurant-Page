export default function addmenuDivContent() {
	const content = document.querySelector('#content');
	const main = document.querySelector('.main');
	const menuDiv = document.createElement('div');
	const footer = document.querySelector('.footer');

	menuDiv.className = 'menu';
	main.appendChild(menuDiv);

	const pizzaListDiv = document.createElement('div');
	pizzaListDiv.className = 'pizza-list';
	menuDiv.appendChild(pizzaListDiv);

	const pizzas = [
		{
			name: 'Pizza Margherita',
			ingredients: 'sos pomidorowy, ser mozzarella',
			prices: ['32cm - 28zł', '40cm - 36zł', '50cm - 42zł'],
			imgSrc: 'img/MARGARITA.png',
			imgAlt: 'Pizza Margherita',
		},
		{
			name: 'Pizza Capriciosa',
			ingredients: 'sos pomidorowy, ser mozzarella, szynka, pieczarki',
			prices: ['32cm - 33zł', '40cm - 45zł', '50cm - 50zł'],
			imgSrc: 'img/CAPRICIOSA.png',
			imgAlt: 'Pizza Capriciosa',
		},
		{
			name: 'Pizza Hawajska',
			ingredients: 'sos pomidorowy, ser mozzarella, szynka, ananas',
			prices: ['32cm - 33zł', '40cm - 44zł', '50cm - 49zł'],
			imgSrc: 'img/HAWAJSKA.png',
			imgAlt: 'Pizza Hawajska',
		},
		{
			name: 'Pizza Salami',
			ingredients: 'sos pomidorowy, ser mozzarella, salami',
			prices: ['32cm - 33zł', '40cm - 44zł', '50cm - 49zł'],
			imgSrc: 'img/SALAMI.png',
			imgAlt: 'Pizza Salami',
		},
		{
			name: 'Pizza Diabolo',
			ingredients: 'sos pomidorowy, ser mozzarella, salami pepperoni, jalapeño',
			prices: ['32cm - 35zł', '40cm - 46zł', '50cm - 53zł'],
			imgSrc: 'img/DIABOLO.png',
			imgAlt: 'Pizza Diabolo',
		},
		{
			name: 'Pizza Formaggi',
			ingredients: 'sos pomidorowy, ser mozzarella, parmezan, ser pleśniowy',
			prices: ['32cm - 39zł', '40cm - 48zł', '50cm - 57zł'],
			imgSrc: 'img/FROMAGIO.png',
			imgAlt: 'Pizza Formaggi',
		},
		{
			name: 'Pizza Carbonara',
			ingredients: 'sos śmietanowy, ser mozzarella, boczek, cebula',
			prices: ['32cm - 38zł', '40cm - 49zł', '50cm - 58zł'],
			imgSrc: 'img/CARBONARA.png',
			imgAlt: 'Pizza Carbonara',
		},
		{
			name: 'Pizza Góralska',
			ingredients: `sos pomidorowy, ser mozzarella, oscypek, boczek, żurawina`,
			prices: ['32cm - 39zł', `40cm - 49zł`, `50cm - 58zł`],
			imgSrc: `img/GORALSKA.png`,
			imgAlt: `Pizza Góralska`,
		},
	];

	for (let i = 0; i < pizzas.length; i += 1) {
		const pizzaItemDiv = document.createElement('div');
		pizzaItemDiv.className = `pizza-item`;
		pizzaListDiv.appendChild(pizzaItemDiv);

		const pizzaDescriptionDiv = document.createElement('div');
		pizzaDescriptionDiv.className = `pizza-description`;
		pizzaItemDiv.appendChild(pizzaDescriptionDiv);

		const pizzaNameDiv = document.createElement('div');
		pizzaNameDiv.className = `pizza-name`;
		pizzaNameDiv.textContent = pizzas[i].name;
		pizzaDescriptionDiv.appendChild(pizzaNameDiv);

		const hrElement = document.createElement('hr');
		pizzaDescriptionDiv.appendChild(hrElement);

		const pizzaIngredientsDiv = document.createElement('div');
		pizzaIngredientsDiv.className = `pizza-ingredients`;
		pizzaIngredientsDiv.textContent = pizzas[i].ingredients;
		pizzaDescriptionDiv.appendChild(pizzaIngredientsDiv);

		const brElement = document.createElement('br');
		pizzaDescriptionDiv.appendChild(brElement);

		for (let j = 0; j < pizzas[i].prices.length; j += 1) {
			const pizzaPriceDiv = document.createElement('div');
			pizzaPriceDiv.className = `pizza-price`;
			pizzaPriceDiv.textContent = pizzas[i].prices[j];
			pizzaDescriptionDiv.appendChild(pizzaPriceDiv);
		}

		const imgElement = document.createElement('img');
		imgElement.src = pizzas[i].imgSrc;
		imgElement.alt = pizzas[i].imgAlt;
		pizzaItemDiv.appendChild(imgElement);
	}

	content.appendChild(main);
	content.insertBefore(main, footer);
}

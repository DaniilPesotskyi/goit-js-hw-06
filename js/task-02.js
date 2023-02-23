const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById('ingredients')

function makeArrayItemsListMarkup(array) {
  let arrayItemsList = [];
  array.forEach(el => {
    const ingredientEl = document.createElement('li')
    ingredientEl.classList.add('item')
    ingredientEl.textContent = el

    arrayItemsList.push(ingredientEl)
  });

  ingredientsList.append(...arrayItemsList);
}

makeArrayItemsListMarkup(ingredients)
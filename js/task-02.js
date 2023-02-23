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
  array.forEach(el => {
    const ingredientEl = document.createElement('li')
    ingredientEl.classList.add('item')
    ingredientEl.textContent = el

    ingredientsList.append(ingredientEl);
  });
}

makeArrayItemsListMarkup(ingredients)
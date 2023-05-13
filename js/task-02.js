const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const unorderedList = document.querySelector('#ingredients');

const elementIngredients = ingredients.forEach(ingredient => {
  const element = document.createElement('li');
  element.textContent = ingredient;
  element.classList.add("item");
  unorderedList.append(element);

});


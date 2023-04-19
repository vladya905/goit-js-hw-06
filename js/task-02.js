const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsItem = ingredients.map((indigrient) => {
  const li = document.createElement('li')
  li.textContent = indigrient
  li.classList.add('item')
  return li

})

const indigrientsList = document.querySelector('#ingredients')
indigrientsList.append(...ingredientsItem);
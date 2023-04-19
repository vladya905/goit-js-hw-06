const catigoriesList = document.querySelector('#categories')
const catigoriesItem = catigoriesList.querySelectorAll('.item')
console.log(`Number of categories: ${catigoriesItem.length}`);
catigoriesItem.forEach((item) => {
    const categoriesName = item.querySelector('h2').textContent;
    const categoriesEl = item.querySelectorAll('li').length
    console.log(`Category: ${categoriesName}\nElements: ${categoriesEl}`)
});
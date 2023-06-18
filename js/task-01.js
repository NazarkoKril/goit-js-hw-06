const catogorylength = 
    document.querySelector('ul#categories').children.length
console.log(`Number of categories: ${catogorylength}`)
const categories = document.querySelectorAll('ul#categories li.item');

categories.forEach(category => {
  const title = category.querySelector('h2').textContent;
  const count = category.querySelectorAll('li').length;
  console.log(`${title}: ${count}`);
});
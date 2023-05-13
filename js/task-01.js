const list = document.querySelector('#categories');
let categoriesTotal = list.children.length;
console.log(`Number of categories: ${categoriesTotal}`);

const listCategories = document.querySelectorAll('.item');
for(const category of listCategories){
    console.log(`Category: ${category.firstElementChild.textContent}`);
    console.log(`Element: ${category.lastChild.length}`)
}


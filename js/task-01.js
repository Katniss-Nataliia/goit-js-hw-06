const list = document.querySelector('#categories');
let categoriesTotal = list.children.length;
console.log(`Number of categories: ${categoriesTotal}`);

const listCategories = document.querySelectorAll('.item');
for(const category of listCategories){
    console.log(`Category: ${category.firstElementChild.textContent}`);
    const categoryItems = category.querySelectorAll("li")
    console.log(`Element: ${categoryItems.length}`)
}


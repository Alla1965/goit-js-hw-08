const categoriesList = document.querySelector("#categories");
const categories = categoriesList.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
	const title = category.querySelector(".head-item").textContent;
	const itemsCount = category.querySelectorAll(".list-in-item-item").length;
	console.log(`Category: ${title}`);
	console.log(`Elements: ${itemsCount}`);
});

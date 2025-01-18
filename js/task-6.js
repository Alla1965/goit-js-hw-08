function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

// Функція для створення квадратів
function createBoxes(amount) {
	const boxesContainer = document.getElementById("boxes");

	// Очищаємо вміст контейнера перед додаванням нових елементів
	boxesContainer.innerHTML = "";

	// Створюємо стільки квадратів, скільки вказано в параметрі amount
	for (let i = 0; i < amount; i++) {
		const box = document.createElement("div");
		const size = 30 + i * 10; // кожен наступний квадрат на 10px більший

		// Встановлюємо стилі для кожного квадрата
		box.style.width = `${size}px`;
		box.style.height = `${size}px`;
		box.style.backgroundColor = getRandomHexColor();
		box.style.margin = "5px";

		// Додаємо квадрат до контейнера
		boxesContainer.appendChild(box);
	}
}

// Функція для очищення контейнера з квадратами
function destroyBoxes() {
	const boxesContainer = document.getElementById("boxes");
	boxesContainer.innerHTML = ""; // Очищаємо вміст
}

// Обробка події для кнопки Create
document.querySelector("[data-create]").addEventListener("click", () => {
	const inputValue = document.querySelector("input").value;
	const amount = parseInt(inputValue, 10);

	// Перевіряємо, чи введене значення коректне
	if (amount >= 1 && amount <= 100) {
		createBoxes(amount);
	}

	// Очищаємо поле вводу
	document.querySelector("input").value = "";
});

// Обробка події для кнопки Destroy
document.querySelector("[data-destroy]").addEventListener("click", () => {
	destroyBoxes();
});

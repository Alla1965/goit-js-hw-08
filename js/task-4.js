const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", event => {
	// inhibition reset
	event.preventDefault();

	// Accessing form elements
	const { email, password } = event.currentTarget.elements;

	// Clean up  spaces
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();

	// Check if all fields are filled in
	if (!emailValue || !passwordValue) {
		alert("All form fields must be filled in");
		return;
	}

	// Create an object
	const formData = {
		email: emailValue,
		password: passwordValue,
	};

	// Output  to the console
	console.log(formData);

	// Clearing form
	loginForm.reset();
});

// const inputEmail = document.querySelector(".input-form");

// inputElement.addEventListener("focus", () => {
// 	inputEmail.setAttribute("placeholder", "Enter text here..."); // Добавляем placeholder при фокусировке
// });

// inputEmail.addEventListener("blur", () => {
// 	inputEmail.removeAttribute("placeholder"); // Убираем placeholder, когда элемент теряет фокус
// });

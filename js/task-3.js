const inputBox = document.querySelector("#name-input");
const outputBox = document.querySelector("#name-output");

const title = document.querySelector("h1");
title.classList.add("title-h1");

// Create new div
const newContainer = document.createElement("div");

// add class to  new div
newContainer.classList.add("new-container");

// replace elements into div
inputBox.parentElement.replaceChild(newContainer, inputBox);
newContainer.appendChild(inputBox);
title.parentElement.replaceChild(newContainer, title);
newContainer.appendChild(title);

// styles for div
newContainer.style.width = "408px";
newContainer.style.height = "136px";
newContainer.style.gap = "16px";
newContainer.style.background = "#fff";

// styles for title
title.style.fontWeight = "600";
title.style.fontSize = "24px";
title.style.lineHeight = "1.33333";
title.style.letterSpacing = "0.04em";
title.style.color = "#2e2f42";
title.style.marginLeft = "24px";
title.style.marginTop = "0px";

inputBox.addEventListener("input", event => {
	const trimmedValue = event.currentTarget.value.trim();
	outputBox.textContent = trimmedValue === "" ? "Anonymous" : trimmedValue;
});

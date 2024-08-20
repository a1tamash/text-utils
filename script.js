const text = document.querySelector("#text");
const upper = document.querySelector("#change1");
const lower = document.querySelector("#change2");
const clear = document.querySelector("#clear");
const change = document.querySelector("#replace");

function count(str) {
	let words =
		str
			.trim()
			.split("")
			.filter((ch) => ch == " ").length + (str.length === 0 ? 0 : 1);

	console.log(words);
	let characters = str.trim().length - words;
	if (words === 0) characters = 0;
	else if (words === 1) characters = str.trim().length;
	else characters = str.trim().length - (words - 1);

	const countValue = document.querySelector("#count");
	countValue.innerText = `${words} words | ${characters} characters`;
}

upper.addEventListener("click", () => {
	toUpper();
});

lower.addEventListener("click", () => {
	toLower();
});

clear.addEventListener("click", () => {
	clearScreen();
});

function toUpper() {
	let ans = getValue().toUpperCase();
	display(ans);
	count(ans);
}

function toLower() {
	let ans = getValue().toLowerCase();
	display(ans);
	count(ans);
}

function clearScreen() {
	display("");
	count("");
	text.value = "";
}

function display(str) {
	replace.innerText = str;
}

function getValue() {
	return text.value;
}

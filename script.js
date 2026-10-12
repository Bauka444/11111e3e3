// --- Практика 3: кнопка «Поздороваться» со счётчиком кликов ---
const greetBtn = document.querySelector("#greetBtn");
const title = document.querySelector("h1");
const originalTitle = title.textContent;
let clicks = 0;

function greet(name) {
  if (name === "") {
    return "Привет, гость!";
  }
  return "Привет, " + name + "!";
}

greetBtn.addEventListener("click", function () {
  clicks++;
  title.textContent = greet("мир") + " (кликов: " + clicks + ")";
  title.style.color = "orange";
  greetBtn.textContent = "Поздороваться (" + clicks + ")";
});

// --- Практика 4: смена темы (светлая / тёмная) ---
const themeBtn = document.querySelector("#themeBtn");

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  themeBtn.textContent = isDark ? "Светлая тема" : "Тёмная тема";
});

// --- Домашнее задание: форма с именем ---
const nameInput = document.querySelector("#nameInput");
const nameBtn = document.querySelector("#nameBtn");
const greeting = document.querySelector("#greeting");

nameBtn.addEventListener("click", function () {
  greeting.textContent = greet(nameInput.value.trim());
});

nameInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    nameBtn.click();
  }
});

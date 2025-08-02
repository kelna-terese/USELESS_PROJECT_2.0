let count = 0;

const display = document.getElementById("count-display");
const banana = document.getElementById("banana");

banana.addEventListener("click", () => {
  count++;
  display.textContent = count;
});

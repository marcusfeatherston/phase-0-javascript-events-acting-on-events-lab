const dodger = document.getElementById("dodger");

dodger.style.backgroundColor = "#FF69B4";

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});

const moveDodgerLeft = () => {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
};

function populateContainer(size) {
  let container = document.querySelector(".container");
  let squares = document.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.classList.add("cell");
    container.style.backgroundColor = "#e0e0e0";
    square.addEventListener("mouseover", colorSquare);
    container.insertAdjacentElement("beforeend", square);
  }
}

populateContainer(16);

function sizeChange(input) {
  input >= 2 && input <= 100 ? populateContainer(input) : console.log("Error! Too many or too few squares");
};




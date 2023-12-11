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
    square.addEventListener("mouseover", colorSquare);
    container.insertAdjacentElement("beforeend", square);
  }
}



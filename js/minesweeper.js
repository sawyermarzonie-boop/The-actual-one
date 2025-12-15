function startGame(size, mines) {
  const game = document.getElementById("game");
  game.innerHTML = "";
  game.style.gridTemplateColumns = `repeat(${size}, 30px)`;

  let minePositions = [];
  while (minePositions.length < mines) {
    let pos = Math.floor(Math.random() * size * size);
    if (!minePositions.includes(pos)) minePositions.push(pos);
  }

  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";

    cell.onclick = () => {
      if (minePositions.includes(i)) {
        cell.classList.add("mine");
        alert("Boom 💥");
      } else {
        cell.classList.add("safe");
      }
    };
    game.appendChild(cell);
  }
}

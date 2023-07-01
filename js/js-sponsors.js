const wrappers = document.getElementsByClassName("tiles");
const pseudoBodies = document.getElementsByClassName("pseudoBody");

console.log(pseudoBodies);

let columns = 0,
    rows = 0,
    toggled = [false,false,false];

const toggle = i => {
  toggled[i] = !toggled[i];

  pseudoBodies[i].classList.toggle("toggled");
}

const handleOnClick = (column, row, index,i) => {
  toggle(i);
  
  anime({
    targets: (".tile-" + i),
    opacity: toggled[i] ? 0 : 1,
    delay: anime.stagger(50, {
      grid: [column, row],
      from: index
    })
  });
}

const createTile = (columns, rows, index,i) => {
  const tile = document.createElement("div");
  tile.classList.add("tile");
  tile.classList.add("tile-" + i);
  
  tile.style.opacity = toggled[i] ? 0 : 1;
  
  tile.onclick = e => handleOnClick(columns, rows, index,i);
  
  return tile;
}

const createTiles = (columns, rows, quantity,i) => {
  index = 0;
  Array.from(Array(quantity)).map((tile, index) => {
    wrappers[i].appendChild(createTile(columns, rows, index,i));
  });
}

const createGrid = i => {
  wrappers[i].innerHTML = "";
  
  const size = 50;
  
  columns = Math.floor(pseudoBodies[i].clientWidth / size);
  rows = Math.floor(pseudoBodies[i].clientHeight / size);
  
  wrappers[i].style.setProperty("--columns", columns);
  wrappers[i].style.setProperty("--rows", rows);
  wrappers[i].style.setProperty("--width", pseudoBodies[i].clientWidth);
  
  createTiles(columns, rows, columns * rows,i);
}

const createGrids = () => {
  for(let i = 0; i < 3; i++){
    createGrid(i);
  }
}

function creation() {
  setTimeout(function() {
    createGrids();
  }, 600);
  console.log("Click");
}


window.onresize = () => createGrids();
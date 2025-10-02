// Base game
let currentSize = 16; // default pixel mode
let currentMode = "black"; // default color mode

const container = document.querySelector("#container");

for (let i = 0; i < 256; i++) {
  let pixel = document.createElement("div"); // Element creation
  pixel.classList.add("pixel");

  pixel.addEventListener("mouseover", () => {
    pixel.style.backgroundColor = "black"; // styling of element
  });

  container.appendChild(pixel);
}
// above is the base game

const gridBuild = () => {};

// Grid generation  prompt
const gridGenerationBtn = document.querySelector("#grid-generation");
gridGenerationBtn.addEventListener("click", () => {
  const input = prompt("pick a number between 1 and 100");

  if (input === null) {
    // this means user cancelled
    console.log("User Cancelled Generation");
    return;
  }
  const trimmedPrompt = input.trim(); // will remove any white space to user prompt
  if (!/^\d+$/.test(trimmedPrompt)) {
    console.log("Not a Valid Entry: Enter only valid number from 1 to 100");
    return;
  }

  // console.log(typeof trimmedPrompt); // shows up - varPrompt is a string it needs to be converted to a number

  //  convert to number
  const gridSize = Number(trimmedPrompt);
  // console.log(gridSize);

  // range check

  if (gridSize < 1 || gridSize > 100) {
    console.log("Out of range: enter 1 - 100");
    return;
  }

  currentSize = gridSize;

  container.replaceChildren();
});

// Grid generation  prompt ^

//Buttons

// const rainbowBtn = document.querySelector("#mode-rainbow");
// rainbowBtn.addEventListener("click", () => {
//   // pixel.style.backgroundColor =
// });

//

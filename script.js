// Base game
let currentSize = 16; // default pixel mode
let currentMode = "black"; // default color mode
const container = document.querySelector("#container");

const clearContainer = () => {
  container.replaceChildren();
};

const gridBuild = (size) => {
  let totalPixels = size * size;
  container.style.setProperty("--grid-size", size);
  for (let i = 0; i < totalPixels; i++) {
    let pixel = document.createElement("div"); // Element creation
    pixel.classList.add("pixel");

    pixel.addEventListener("mouseover", () => {
      pixel.style.backgroundColor = currentMode;
    });
    container.appendChild(pixel);
  }
};

// base game
gridBuild(16);

// Grid generation  prompt

// const gridGenerationBtn = document.querySelector("#grid-generation");
// gridGenerationBtn.addEventListener("click", () => {
//   const input = prompt("pick a number between 1 and 100");

//   if (input === null) {
//     // this means user cancelled
//     console.log("User Cancelled Generation");
//     return;
//   }
//   const trimmedPrompt = input.trim(); // will remove any white space to user prompt
//   if (!/^\d+$/.test(trimmedPrompt)) {
//     console.log("Not a Valid Entry: Enter only valid number from 1 to 100");
//     return;
//   }

//   // console.log(typeof trimmedPrompt); // shows up - varPrompt is a string it needs to be converted to a number

//   //  convert to number
//   const gridSize = Number(trimmedPrompt);
//   // console.log(gridSize);

//   // range check

//   if (gridSize < 1 || gridSize > 100) {
//     console.log("Out of range: enter 1 - 100");
//     return;
//   }

//   currentSize = gridSize;
// });

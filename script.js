const container = document.querySelector("#container");

for (let i = 0; i < 256; i++) {
  let pixel = document.createElement("div");
  pixel.classList.add("pixel");

  pixel.addEventListener("mouseover", () => {
    pixel.style.backgroundColor = "black";
  });

  container.appendChild(pixel);
}

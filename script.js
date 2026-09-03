const DEFAULT_SIZE = 8;
const DEFAULT_COLOR = "#000";
const DEFAULT_MODE = "color";

let currentSize = DEFAULT_SIZE;
let currentColor = DEFAULT_COLOR;
let currentMode = "color"

const htmlCanvas = document.querySelector("#canvas");

function createCanvas(size) {
    let canvas = [];

    for (let i = 0; i < size*size; i++) {
        canvas[i] = document.createElement("div");
        canvas[i].classList.add("canva");
        canvas[i].style.width = `${htmlCanvas.clientWidth/size}px`;
        canvas[i].style.height = `${htmlCanvas.clientHeight/size}`;
    }
    
    canvas.map((canva) => {
        canva.addEventListener("mouseover", paintCanvas);
        canva.addEventListener("mousedown", paintCanvas);
        htmlCanvas.appendChild(canva);
    });
}

let mouseDown = false;
document.body.addEventListener("mousedown", () => (mouseDown = true));
document.body.addEventListener("mouseup", () => (mouseDown = false));

function paintCanvas(e) {
    if (e.type === "mouseover" && !mouseDown) return;
    if (currentMode === "color") {
        e.target.style.backgroundColor = currentColor;
    }
    
}

function cleanCanvas() {
    const canvaArray = Array.from(document.querySelectorAll(".canva"));
    canvaArray.map((canva) => {
        canva.remove();
    });
}

const btnScreenSize = document.querySelector("#screen-size");
btnScreenSize.addEventListener("click", () => {
    const maxSize = 64;
    const screenSize = +prompt(`Choose your screen size: (min: ${DEFAULT_SIZE}px max: ${maxSize}px)`, currentSize);
    if (screenSize < DEFAULT_SIZE || screenSize > maxSize || isNaN(screenSize)) {
        alert("Choose a valid value!");
        return currentSize;
    }
    cleanCanvas();
    createCanvas(screenSize);
})

window.addEventListener("load", () => {
    createCanvas(currentSize);
});

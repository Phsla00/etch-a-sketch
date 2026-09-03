const DEFAULT_SIZE = 16;
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
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function paintCanvas(e) {
    if (e.type === "mouseover" && !mouseDown) return;
    if (currentMode === "color") {
        e.target.style.backgroundColor = currentColor;
    }
    
}

createCanvas(currentSize);

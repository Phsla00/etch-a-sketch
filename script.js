const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = "black";

let currentSize = DEFAULT_SIZE;
let currentColor = DEFAULT_COLOR;

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
        htmlCanvas.appendChild(canva);
    })
}

createCanvas(currentSize);

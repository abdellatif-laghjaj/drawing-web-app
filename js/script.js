const canvas = document.getElementById('canvas');
const toolBtns = document.querySelectorAll('.tool-btn');
const ctx = canvas.getContext('2d');

console.log(toolBtns);

let isDrawing = false;
let brushWidth = 5;

window.addEventListener('load', () => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
});

const drawing = (e) => {
    if (!isDrawing) return;
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
}

const startDrawing = (e) => {
    isDrawing = true;
    ctx.beginPath();
    ctx.lineWidth = brushWidth;
}

const stopDrawing = (e) => {
    isDrawing = false;
}

toolBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log(btn.id);
    });
});

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mousemove', drawing);
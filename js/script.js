const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let isDrawing = false;

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
}

const stopDrawing = (e) => {
    isDrawing = false;
}

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mousemove', drawing);
const canvas = document.getElementById('canvas');
const toolBtns = document.querySelectorAll('.tool-btn');
const ctx = canvas.getContext('2d');

console.log(toolBtns);

let isDrawing = false;
let prevMouseX, prevMouseY;
let snapshot;
let brushWidth = 5;
let selectedTool = 'brush';

window.addEventListener('load', () => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
});

const drawRectangle = (e) => {
    if (!isDrawing) return;
    ctx.strokeRect(e.offsetX, e.offsetY, prevMouseX - e.offsetX, prevMouseY - e.offsetY);
}

const drawing = (e) => {
    if (!isDrawing) return;

    ctx.putImageData(snapshot, 0, 0);
    if (selectedTool === 'brush') {
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
    } else if (selectedTool === 'eraser') {
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.strokeStyle = '#fff';
        ctx.stroke();
    }else if (selectedTool === 'rectangle') {
        drawRectangle(e);
    }else if (selectedTool === 'circle') {
        drawCircle(e);
    }else if (selectedTool === 'triangle') {
        drawTriangle(e);
    }else {
        console.log('no tool selected');
    }
}

const startDrawing = (e) => {
    isDrawing = true;
    prevMouseX = e.offsetX;
    prevMouseY = e.offsetY;
    snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.lineWidth = brushWidth;
}

const stopDrawing = (e) => {
    isDrawing = false;
}

toolBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log(btn.id);
        selectedTool = btn.id;
    });
});

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mousemove', drawing);
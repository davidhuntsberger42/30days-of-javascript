var canvas = document.querySelector('#draw')
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#SUPERCOOL';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 50;
//ctx.globalCompositeOperation = 'multiple';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true

function draw(draws) {
    if(!isDrawing) return;
    console.log(draws);
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(draws.offsetX, draws.offsetY);
    ctx.stroke();
    [lastX, lastY] = [draws.offsetX, draws.offsetY];
    
    //lastX = draw.offsetX;
    //lastY = draw.offsetY;
    hue++;
    if(hue >= 360) {
        hue = 0;
    }
    if(ctx.lineWidth >= 50 || ctx.lineWidth <= 5) {
        direction = !direction;
    }
    if(direction) {
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;
    }
}
canvas.addEventListener('mousedown', (draws) => {
    isDrawing = true;
    [lastX, lastY] = [draws.offsetX, draws.offsetY];
});

canvas.addEventListener('mousemove', draw);
//canvas.addEventListener('mousedown', () => isDrawing = true);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
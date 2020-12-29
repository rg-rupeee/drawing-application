console.log('Hello world');

document.querySelector('#favnumber').value = 1;
document.querySelector('#favcolor').value = '#000';

const canvas = document.querySelector('.draw');
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#000';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 1;

let isDrawring = false;
let lastX = 0;
let lastY = 0;

function draw(e){
  if(!isDrawring) return;

  console.log(e);

  ctx.beginPath();
  //start from
  ctx.moveTo(lastX,lastY);
  //go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  lastY = e.offsetY;
  lastX = e.offsetX;
}

canvas.addEventListener('mousedown', (e)=> {
  isDrawring = true;
  lastY = e.offsetY;
  lastX = e.offsetX;
} );

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', ()=> isDrawring = false );
canvas.addEventListener('mouseout', ()=> isDrawring = false );
canvas.addEventListener('mousein', ()=> isDrawring = false );

document.querySelector('#btn').addEventListener('click', ()=>{
  console.log('clear canvas');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
})

document.querySelector('#favcolor').addEventListener('change', ()=>{
  ctx.strokeStyle = document.querySelector('#favcolor').value;
})

document.querySelector('#favnumber').addEventListener('change', ()=>{
  val = document.querySelector('#favnumber').value;
  if(val>0){
    ctx.lineWidth = val;
  }
  else{
    document.querySelector('#favnumber').value = 1;
    ctx.lineWidth = 1;
  }
})

/*
clear the canvas
*/
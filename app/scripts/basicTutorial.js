const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d');

//rectangle
// c.fillRect(x, y, width, height)
c.fillStyle= 'red';
c.fillRect(100, 100, 100, 100);


//line
c.beginPath();
c.strokeStyle = 'blue';
c.moveTo(300, 200);
c.lineTo(200, 600);
c.stroke();

c.beginPath();
c.strokeStyle = 'green';
c.moveTo(50, 200);
c.lineTo(400, 700);
c.stroke();

//arc(x, y, radius, startAngle, endAngle, counterclockwise)
c.beginPath();
c.arc(500, 500, 100, 60, Math.PI * 2, false);
c.stroke();

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

for(let x=1; x<1000; x++) {
  let xAxis = Math.random() * window.innerWidth;
  let yAxis = Math.random() * window.innerHeight;
  let col1 = getRandomIntInclusive(0, 255);
  let col2 = getRandomIntInclusive(0, 255);
  let col3 = getRandomIntInclusive(0, 255);
  let col4 = getRandomIntInclusive(0, 255);
  c.beginPath();
  c.arc(xAxis, yAxis, 30, 0, Math.PI * 2, false);
  c.strokeStyle= `rgba(${col1},${col2},${col3},${col4})`;
  c.stroke();
}

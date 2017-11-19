import { c } from './canvas'
export default function Circle(x, y, dx, dy, radius = 30) {
  this.x = x;
  this.dx = dx;
  this.y = y;
  this.dy = dy;
  this.radius = radius;
  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle= `blue`;
    c.stroke();

  };

}

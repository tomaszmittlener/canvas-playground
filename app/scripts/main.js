import Circle from './circle'
import { width, height, getRandomIntInclusive } from "./canvas";

const circleArray = [];


for(let i = 0; i < 10; i++ ){
  const x = getRandomIntInclusive(0, height);
  const y = getRandomIntInclusive(0, width);
  const dx = (Math.random() -0.5) * 8;
  const dy = (Math.random() -0.5) * 8;
  circleArray.push(new Circle());
  circleArray[i].draw();
}

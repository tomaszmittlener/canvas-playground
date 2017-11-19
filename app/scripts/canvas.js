export const width = window.innerWidth;
export const height = window.innerHeight;
export function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

//canvas
const canvas = document.querySelector('canvas');
canvas.width = width;
canvas.height = height;
export const c = canvas.getContext('2d');

import Grid1Background from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.16/build/backgrounds/grid1.cdn.min.js';

const canvas = document.getElementById('webgl-canvas');
const bg = Grid1Background(canvas);

if (bg && bg.grid && bg.grid.light1 && bg.grid.light2) {
  const button1 = document.getElementById('colors-btn');

  if (button1) {
    button1.addEventListener('click', () => {
      const randomColor = () => Math.floor(Math.random() * 0xffffff);

      bg.grid.setColors([randomColor(), randomColor(), randomColor()]);
      bg.grid.light1.color.set(randomColor());
      bg.grid.light1.intensity = 500 + Math.random() * 1000;
      bg.grid.light2.color.set(randomColor());
      bg.grid.light2.intensity = 250 + Math.random() * 250;
    });
  } else {
    console.error('Кнопка с id "colors-btn" не найдена');
  }
} else {
  console.error('Ошибка при инициализации Grid1Background или неверная структура объекта');
}

import { Canvas } from 'terminal-canvas';
import { FigText } from '..';

const canvas = new Canvas().reset();
const shape = new FigText({
  text: 'Hello, World',
  font: 'Gothic',
  verticalLayout: 'full',
  horizontalLayout: 'full',
  printDirection: 0,
  showHardBlanks: false
});

shape.render(canvas);
canvas.flush();

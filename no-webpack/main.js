import { sayHello } from './utils.js';

document.getElementById('btn').addEventListener('click', () => {
  sayHello('Webpack 없이 잘 돌아감!');
});

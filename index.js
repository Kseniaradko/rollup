import "./index.css";
import JS_IMAGE from './assets/js.png';

console.log('Hello World!');

const textJS = document.createElement('h1');
textJS.textContent = 'I love JavaScript';

const JSImageHTML = document.createElement('img');
JSImageHTML.src = JS_IMAGE;
JSImageHTML.className = 'image';
document.body.append(textJS, JSImageHTML);
import './style.css';
import DOMStuff from './DOMStuff';

const body = document.querySelector('body');


const testDiv = document.querySelector('#main')
testDiv.appendChild(DOMStuff.make('div', 'Sample text'));
console.log(testDiv);
console.log('Ayy');


const testDiv2 = document.querySelector('#main2');
console.log(testDiv2)
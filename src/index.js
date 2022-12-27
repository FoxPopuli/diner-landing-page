import './style.css';
import {getState} from './pageState';
import {header} from './header';
import {sideBar} from './sidebar';

const main = document.createElement('div');
main.className = 'main';
main.appendChild(header);
main.appendChild(sideBar);




document.body.appendChild(main)

// console.log(getState())
// console.log(test)
// console.log(test.testFunc())
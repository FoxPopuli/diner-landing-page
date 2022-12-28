import './style.css';
import {getState} from './pageState';
import {header} from './header';
import {sideBar} from './sidebar';
import {content1} from './content1';

export const main = document.createElement('div');
main.className = 'main';
main.appendChild(header);
main.appendChild(sideBar);
main.appendChild(content1)



document.body.appendChild(main)

// console.log(getState())
// console.log(test)
// console.log(test.testFunc())
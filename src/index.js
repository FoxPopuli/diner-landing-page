import './style.css';
import {header} from './header';
import {sideBar} from './sidebar';
import {content1} from './content1';
// import background from './img/sushi.jpg'

export const main = document.createElement('div');

main.className = 'main';
main.appendChild(header);
main.appendChild(sideBar);
main.appendChild(content1);

document.body.appendChild(main);

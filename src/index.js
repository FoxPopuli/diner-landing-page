import './style.css';
import {header} from './header';
import {sideBar} from './sidebar';
import {content1} from './content1';
import bgImgPath from './img/sushi.jpg';


export const main = document.createElement('div');
main.className = 'main';
main.appendChild(header);
main.appendChild(sideBar);
main.appendChild(content1);

const bgImg = new Image();
bgImg.src = bgImgPath;
bgImg.classList.add('bg-img')

// document.body.style.backgroundImage = "url('../src/img/sushi.jpg')";
// document.body.style.height = '100%'
document.body.style.backgroundImage = bgImg;





document.body.appendChild(main);

import elementFactory from "./elementFactory";
import fbIcon from './img/fb-icon.svg';
import instaIcon from './img/insta-icon.svg';
import logoIcon from './img/restaurant-logo.svg';
import menuIcon from './img/menu-icon.svg';
import { paths } from './paths';
import { listFactory } from "./listFactory";
import { sideBar } from "./sidebar";



export const header = document.createElement('header');

// Logo

const logoEle = elementFactory({
    type: 'a',
    href: paths.home,
})

const logoImg = new Image();  
logoImg.src = logoIcon;

logoEle.appendChild(logoImg);

// Nav links
const nav1 = elementFactory({
    type: 'a',
    href: paths.home,
    textContent: 'Home'
})

const nav2 = elementFactory({
    type: 'a',
    href: paths.about,
    textContent: 'About'
})

const nav3 = elementFactory({
    type: 'a',
    href: paths.menues,
    textContent: 'Our Menus'
})

const nav4 = elementFactory({
    type: 'a',
    href: paths.reservations,
    textContent: 'Reservations'
})

const nav5 = elementFactory({
    type: 'a',
    href: paths.contact,
    textContent: 'Contact'
})

const regularLinks = [nav1, nav2, nav3, nav4, nav5];
const regularList = listFactory(regularLinks);

// Social Media Links
// facebook
const fbEle = elementFactory({
    type: 'a',
    href: paths.facebook,
});

const fbImg = document.createElement('img');
fbImg.src = fbIcon;

fbEle.appendChild(fbImg);


// Instagram
const instaEle = elementFactory({
    type: 'a',
    href: paths.instagram
})

const instaImg = document.createElement('img');
instaImg.src = instaIcon;

instaEle.appendChild(instaImg);

// Side nav button
const sideNavButton = elementFactory({
    type: 'img',
    className: 'menu-button',
    src: menuIcon
})

sideNavButton.addEventListener('click', () => {
    sideBar.classList.toggle('invis');
})

// Media div
const socialLinks = elementFactory({
    type: 'div',
    className: 'social-links'
})

socialLinks.appendChild(fbEle);
socialLinks.appendChild(instaEle);
socialLinks.appendChild(sideNavButton);


// Append
header.appendChild(logoEle)
header.appendChild(regularList);
header.appendChild(socialLinks);





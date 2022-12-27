import elementFactory from './elementFactory';
import { listFactory } from './listFactory';
import { paths } from './paths';

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

export const sideBar = elementFactory({
    type: 'div',
    className: 'side-nav invis'
})

sideBar.appendChild(regularList)
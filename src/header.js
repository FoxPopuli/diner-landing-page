import elementFactory from "./elementFactory";
import fbIcon from './img/fb-icon.svg';
import instaIcon from './img/insta-icon.svg';
import { paths } from './paths';

const listFactory = (items) => {
    const list = document.createElement('ul');
    
    items.forEach( item => {
        const li = document.createElement('li').appendChild(item);
        list.appendChild(li); 
    })

    return list;
}

export const headerFactory = () => {
    const header = document.createElement('header');

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
        // img:  elementFactory({
        //     type: 'img',
        //     src: fbIcon
        // })
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
        type: 'button',
        textContent: 'temp'
    })


    // Append
    header.appendChild(regularList);
    header.appendChild(fbEle);
    header.appendChild(instaEle);
    header.appendChild(sideNavButton);


    return header;
} 



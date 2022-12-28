import elementFactory from "./elementFactory";
// OT 392 410 26
// 086 007 0000
// 012 336 3823 
// 6201285188080
export const content1 = elementFactory({
    type: 'div',
    className: 'block1'
})

const h1 = elementFactory({
    type: 'h1',
    textContent: 'Flavour, precision and perfection'
})

const h2 = elementFactory({
    type: 'h2',
    textContent: "Jane Doe's Diner is a diner owned by Jane Doe. We serve food and drinks."
})

const mainMenuButton = elementFactory({
    type: 'div',
    textContent: 'VIEW MAIN MENU'
})


mainMenuButton.addEventListener('click', (e) => {
    console.log('mainMenuButton clicked')
    console.log(e.target)
    console.log(this)
    if (e.target.closest('')) {
        console.log('ayyy')
    }
})

// mainMenuButton.addEventListener('click', menuClic)

const orderOnlineButton = elementFactory({
    type: 'div',
    textContent: 'ORDER ONLINE'
})

const buttonEle = elementFactory({
    type: 'div',
    className: 'button-div'
})

buttonEle.appendChild(mainMenuButton)
buttonEle.appendChild(orderOnlineButton)


content1.appendChild(h1);
content1.appendChild(h2);
content1.appendChild(buttonEle);

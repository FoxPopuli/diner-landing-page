import elementFactory from "./elementFactory";

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

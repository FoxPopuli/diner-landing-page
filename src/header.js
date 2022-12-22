import elementFactory from "./elementFactory";

const testObj = {
    type: 'div',
    className: 'test-class',
    id: 'test-id',
    textContent: `I am a div generated by elementFactory.`
}
const testA = {
    type: 'a',
    textContent: 'Item 1',
    href: '#'
}
// console.log(elementFactory(testA))
const testA2 = elementFactory(testA)
console.log(testA2)
const testLi = {
    type: 'li',
    // textContent: 'Item',
    appendChild: elementFactory(testA)
}

const testArr = [
    testLi,
    testLi,
    testLi
]


const listFactory = (items) => {
    const list = document.createElement('ul');
    
    items.forEach( (item) => {
        list.appendChild(elementFactory(item));
    })
    console.log(list)
    return list;
}

export const headerFactory = (itemsLeft, itemsRight) => {
    const header = document.createElement('header');
    
    const linksLeft = listFactory(itemsLeft);
    const linksRight = listFactory(itemsRight);

    header.appendChild(linksLeft);
    header.appendChild(linksRight);

    return header;
} 

document.body.appendChild(
    headerFactory(testArr, testArr)
)


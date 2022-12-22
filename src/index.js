import './style.css';
import {getState} from './pageState';
import {headerFactory} from './header';


const testItemsLeft = [
    {
        name: "Link 1",
        ref: "#"
    },
    {
        name: "Link 2",
        ref: '#'
    },
    {
        name: "Link 3",
        ref: '#'
    },
]


const testItemsRight = [...testItemsLeft];

const body = document.body;

body.appendChild(
    headerFactory(testItemsLeft, testItemsRight)
)

console.log(getState())
// console.log(test)
// console.log(test.testFunc())
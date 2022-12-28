// Generates an element based on the argument object
// all props besides type must be valid properties of a DOM element (href, textContent...)
// the children property must be a DOM element (recursion to fix?)
export default (obj) => {
    const {type, ...rest} = obj;

    const ele = document.createElement(type);
    for (let prop in rest) {
        if (typeof ele[prop] === 'function') {
            ele[prop](rest[prop]);
        } else {
            ele[prop] = rest[prop];
        }
    }

    return ele;    
}
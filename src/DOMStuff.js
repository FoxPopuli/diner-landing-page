export default class DOMStuff {
    static make(type, text) {
        const element = document.createElement(type);
        element.textContent = text;
        return element;
    }
}
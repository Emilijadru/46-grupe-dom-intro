
function capitalize(text) {
    return text[0].toUpperCase() + text.slice(1);
}

function santaText(text) {
    return `🎅 ${text}, ${text}, ${text} 👋`;
}

function dashText(text) {
    return '-'.repeat(text.length);
}

function formatList(selector, textFormatFunc) {
    const parentDOM = document.querySelector(selector);
    const allLiDOM = parentDOM.querySelectorAll('li');

    for (let i = 0; i < allLiDOM.length; i++) {
        const liDOM = allLiDOM[i];
        liDOM.innerText = textFormatFunc(liDOM.innerText);
    }
}

formatList('.veg', capitalize);
formatList('.fun', santaText);
formatList('.dash', dashText);
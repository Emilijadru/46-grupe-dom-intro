const hi= 'labas rytas';
console.log(hi);

const titleDOM = document.getElementById('title');
console.log(titleDOM);

titleDOM.innerText = hi;

console.log(titleDOM.classList)

for (let i = 0; i < titleDOM.classList; i++) {
const c = titleDOM.classList[i];
titleDOM.classList.remove(c);
}

const sectionTitle = 'About you';
const sectionTitleDOM = document.querySelector('h2.section-title > span')

sectionTitleDOM.textContent = sectionTitle;
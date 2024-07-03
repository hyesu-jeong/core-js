const template = document.createElement('template');

template.classList.add('temp');
template.setAttribute;
template.innerHTML = /* html */ `
<div>bye</div>
<div>JavaScript</div>
`;

console.log(template);

const app = document.querySelector('#app');
const temp = document.querySelector('#temp');

const clone = temp.content.cloneNode(true);

app.appendChild(clone);

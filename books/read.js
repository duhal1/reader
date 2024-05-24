const num = location.search.substring(1);

let names = [
    'незнайка', 'жёлтый туман', 'вини пух', 'волшебник изумрудного города', 
    'хроники нарнии', 
]

const h1 = document.querySelector('h1');
const embed = document.querySelector('embed');

h1.innerHTML = names[num];
embed.src = ['texts', `text${num}.txt`].join('/');



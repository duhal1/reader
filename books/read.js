const num = location.search.substring(1);


let names = [
    'незнайка', 'жёлтый туман', 'вини пух', 'волшебник изумрудного города',
    'хроники нарнии'
]

const h3 = document.querySelector('h3');
const embed = document.querySelector('embed');
const title = document.querySelector('title');

h3.innerHTML = names[num];
title.innerHTML = names[num];
embed.src = ['texts', `text${num}.txt`].join('/');





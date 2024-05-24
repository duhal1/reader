const num = location.search.substring(1);

const h3 = document.querySelector('h3');
const embed = document.querySelector('embed');

h3.innerHTML = names[num];
embed.src = ['books', 'texts', `text${num}.txt`].join('/');



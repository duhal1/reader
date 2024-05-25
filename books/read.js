const num = location.search.substring(1);

const title = document.querySelector('title');
const h3 = document.querySelector('h3');
const embed = document.querySelector('embed');

title.innerHTML = names[num];
h3.innerHTML = names[num];
embed.src = texts[num];






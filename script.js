let books = [];
  
class book  {
    constructor(bookNum, name, img) {
        this.bookNum = bookNum;
        this.name = name;
        this.img = img;
    }

    createBook ()  {
        const allBooks = document.querySelector(".allBooks");
        allBooks.innerHTML += `<div><a href="books/${this.bookNum}.html"><img src = ${this.img}></a><p>${this.name}</p></div>`;
    }
}

let names = [
    'незнайка', 'жёлтый туман', 'вини пух', 'волшебник изумрудного города', 
    'хроники нарнии', 
]

let images = ['images/noknolege.png', 'images/yellowfog.png', 'images/vinnypuh.png', 'images/magician.png', 'images/Chronicles.png']



names.forEach((element, i) => {
            let book1 = new book(bookNum = ['book', (i + 1) ].join(''), name = element, img = images[i])
        book1.createBook();
    })


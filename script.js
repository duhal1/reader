let books = [];
  
class book  {
    constructor(textNum, name, img) {
        this.textNum = textNum;
        this.name = name;
        this.img = img;
    }

    createBook ()  {
        const allBooks = document.querySelector(".all-books");
        allBooks.innerHTML += `<div><a href="books/read.html?${this.textNum}"><img src = ${this.img}></a><p>${this.name}</p></div>`;
    }
}

let names = [
    'незнайка', 'жёлтый туман', 'вини пух', 'волшебник изумрудного города', 
    'хроники нарнии', 
]

let images = ['images/noknolege.png', 'images/yellowfog.png', 'images/vinnypuh.png', 'images/magician.png', 'images/Chronicles.png']



names.forEach((element, i) => {
            let book1 = new book(textNum = i, name = element, img = images[i])
        book1.createBook();
    })


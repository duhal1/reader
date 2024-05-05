// const newLocation = (text) => {
//     window.location.href = "read.html"
//     h1 = document.querySelector("h1");
//     p = document.querySelector("p");
//     // h1.innerHTML = name;
//     p.innerHTML = text;
// }   

const book = class {
    width = 100; height = 100
    constructor(text, name, img) {
        this.text = text;
        this.name = name;
        this.img = img;
        this.width = this.width;
        this.height = this.height;
    }

    newLocation = () => {
        window.location.href = "read.html"
        h1 = document.querySelector("h1");
        p = document.querySelector("p");
        h1.innerHTML = this.name;
        p.innerHTML = this.text;
    }   
    

    createBook = () => {
        const allBooks = document.querySelector(".allBooks");
        allBooks.innerHTML += `<div  class = "${this.name}"><img width="${this.width} height="${this.height} src=${this.img}><p>${this.name}</p></div>`;
        const book = document.querySelector(`.${this.name}`)
        book.style.margin = "10px";
        book.click(() => {
            this.newLocation
        })

    }
}

a = new book(text= "rrrrrrr", name="zolushka", text="img.jpeg")
a.createBook()

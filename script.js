const book = class {
    width = 100; height = 100
    constructor(text, name, img) {
        this.text = text;
        this.name = name;
        this.img = img;
        this.width = this.width;
        this.height = this.height;
    }
    createBook = () => {
        const allBooks = document.querySelector(".allBooks");
        allBooks.innerHTML += `<div><img width="${this.width} height="${this.height} src=${this.img}><p>${this.name}</p></div>`;
    }
}


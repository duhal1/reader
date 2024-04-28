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
        const book1 =  document.createElement("div");
        book1.class = this.name
        const allBooks = document.querySelector(".allBooks");
        allBooks.html = book1;
        
    }
}


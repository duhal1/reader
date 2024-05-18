function newLocation ()  {
    window.location.href = "read.html"
}   
class book  {
    width = 100; height = 100
    constructor(text, name, img) {
        this.text = text;
        this.name = name;
        this.img = img;
        this.width = this.width;
        this.height = this.height;
    }


    createBook ()  {

        console.log(this.text, this.name);
        const allBooks = document.querySelector(".allBooks");
        allBooks.innerHTML += `<div class = "${this.name}"><img width="${this.width} height="${this.height} src=${this.img}><p>${this.name}</p></div>`;
        const book = document.querySelector(`.${this.name}`);
        book.style.margin = "10px";
        book.addEventListener('click', function() {
            newLocation()
        } );

    }
}

a = new book(text= "rrrrrrr", name="zolushka", img="img.jpeg")
a.createBook()

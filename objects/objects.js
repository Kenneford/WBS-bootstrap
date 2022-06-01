const books = [{
        title: 'Speak the Word',
        author: 'Eastwood Anaba',
        category: 'Christian Book',
        pictureUrl: 'https://believersportal.com/wp-content/uploads/2016/10/Speak-the-word-Joseph-Eastwood-Anaba.jpg'
    },
    {
        title: 'The Power of Tongues',
        author: 'Chris Oyakhilome',
        category: 'Christian Book',
        pictureUrl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1385790550l/19058383.jpg'
    },
    {
        title: 'Providence and Destiny',
        author: 'Nicholas Duncan Williams',
        category: 'Christian Book',
        pictureUrl: 'https://www.amazon.de/-/en/Archbishop-Nicholas-Duncan-Williams/dp/0692929371?asin=0692929371&revisionId=&format=4&depth=1'
    },
]
console.log(books[2].title);


function getBookHtml(book){
    return `
        <div class="row">
            <div class="first-book book-container col">
                <div class="title">
                    <h2>${book.title}</h2>
                </div>
                <div class="author">
                    <h4>${book.author}</h4>
                </div>
                <div class="category">
                    <h4>${book.category}</h4>
                </div>
                <div class="pictureUrl">
                    ${book.pictureUrl}
                </div>
            </div>
        </div>
    `
}

function renderBooks(){
    const booksElement = document.getElementById("books")
    booksElement.innerHTML = '';
    for(let bookObj of books){
        booksElement.innerHTML += getBookHtml(bookObj);
    }
}

renderBooks()

function BookList({bookList}){
    const booksJsx = bookList.map((book, index) =>{
        return(
            <li key={index}>
                {book.title} by {book.author}
            </li>
        )
    })
    return(
        <ul>
            {booksJsx}
        </ul>
    )
}
export default BookList;
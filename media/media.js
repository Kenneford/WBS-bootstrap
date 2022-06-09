class Media{
    constructor(title){
      this._isCheckedOut = false;
      this._ratings = [];
      this._title = title;
    }
    get isCheckedOut(){
      return this._isCheckedOut;
    }
    get ratings(){
      return this._ratings;
    }
    get title(){
      return this._title;
    }
    toggleCheckOutStatus(){
      this._isCheckedOut = !this._isCheckedOut
    }
    set isCheckedOut(checked){
      this._isCheckedOut = checked
    }
    getAverageRating(){
      const ratingsSum = this._ratings.reduce((previous, current) => {
        return previous + current
      },0)
      return ratingsSum / this._ratings.length
    }
    addRating(rating){
      this._ratings.push(rating)
    }
  }
  
  class Book extends Media{
    constructor(title, author, pages){
      super(title)
      this._author = author;
      this._pages = pages;
    }
  }
  
  const book = new Book('Super Man', 'Nico', 100)
  console.log(book)
  book.addRating(7)
  book.addRating(9)
  console.log(book)
  console.log(book.getAverageRating())
  
  const media = new Media('Dhoom')
  media.addRating(5)
  media.addRating(8)
  console.log(media)
  console.log(media.getAverageRating())
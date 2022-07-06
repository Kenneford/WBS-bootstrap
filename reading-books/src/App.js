
import './App.css';
import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import AddBook from './AddBook';
import BookList from './BookList';

function App() {
    const [newBook, setNewBook] = useState({author: '', title: ''})
    const [bookList, setNewBookList] = useState([])

const addNewBook = () =>{
    setNewBookList(prev => ({...prev, newBook}))
}

  return (
    <div className="App">
        {/* <Container> */}
            <Row>
                <Col>First Column
                <AddBook newBook={newBook} setNewBook={setNewBook} addBookfunction={addNewBook} />
                <BookList bookList={bookList}/>
                    {/* <Form>
                        <Form.Group>
                            <Form.Label>Author</Form.Label>
                            <Form.Control 
                            value={newBook.author} 
                            type="text" 
                            placeholder='Enter author' 
                            onChange={({target}) => setNewBook(prev => ({...prev, author: target.value}))}
                            />
                        </Form.Group>
                    </Form>
                    <Form>
                        <Form.Group>
                            <Form.Label>Title</Form.Label>
                            <Form.Control 
                            value={newBook.title} 
                            type="text" 
                            placeholder='Enter title' 
                            onChange={({target}) => setNewBook(prev => ({...prev, title: target.value}))}
                            />
                        </Form.Group>
                        <Button variant='primary'>
                            Add Book
                        </Button>
                    </Form> */}
                </Col>
                <Col>Second Column</Col>
            </Row>
        {/* </Container> */}
    </div>
  );
}

export default App;

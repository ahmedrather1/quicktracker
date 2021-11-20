import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBooks, deleteBook } from "../redux/BooksListSlice";
import { ListGroup, Badge, Button } from "react-bootstrap";
function BooksList() {
  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.login);
  const bookState = useSelector((state) => state.booksList);
  const [mappedBooks, setMappedBooks] = useState([]);

  useEffect(() => {
    setMappedBooks(bookState.list);
  }, [bookState.list]);

  let click = (toDelete) => {
    let input = {
      id: toDelete,
    };
    console.log("email ", loginState.login.email);
    dispatch(deleteBook(input)).then(() => {
      dispatch(getAllBooks({ email: loginState.login.email }));
    });
  };

  return (
    <div>
      <h1>BooksList</h1>

      <div>
        <ListGroup as="ol">
          {mappedBooks.map((book) => (
            <ListGroup.Item
              as="li"
              key={book._id}
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">{book.title}</div>
                Rating: {book.rating} / 5
              </div>
              <Button
                variant="danger"
                size="sm"
                onClick={() => click(book._id)}
              >
                delete
              </Button>
            </ListGroup.Item>
            //<div key={book._id}> {book.title} </div>
          ))}
        </ListGroup>
      </div>
    </div>
  );
}

export default BooksList;

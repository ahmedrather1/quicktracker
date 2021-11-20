import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBooks } from "../redux/BooksListSlice";
import { ListGroup, Badge } from "react-bootstrap";
function BooksList() {
  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.login);
  const bookState = useSelector((state) => state.booksList);
  const [mappedBooks, setMappedBooks] = useState([]);

  useEffect(() => {
    setMappedBooks(bookState.list);
    console.log(
      "mapped books : ",
      mappedBooks,
      " loading: " + bookState.loading
    );
  });
  return (
    <div>
      <h1>BooksList</h1>

      <div>
        <ListGroup as="ol">
          {mappedBooks.map((book) => (
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">{book.title}</div>
                Rating: {book.rating} / 5
              </div>
              <Badge variant="primary" pill>
                delete
              </Badge>
            </ListGroup.Item>
            //<div key={book._id}> {book.title} </div>
          ))}
        </ListGroup>
      </div>
    </div>
  );
}

export default BooksList;

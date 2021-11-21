import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBooks, deleteBook } from "../redux/BooksListSlice";
import { ListGroup, Badge, Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";

function BooksList() {
  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.login);
  const bookState = useSelector((state) => state.booksList);
  const [mappedBooks, setMappedBooks] = useState([]);
  const [summary, setSummary] = useState(
    "Click on a title to see its summary!"
  );

  useEffect(() => {
    setMappedBooks(bookState.list);
  }, [bookState.list]);

  let deleteClick = (toDelete) => {
    let input = {
      id: toDelete,
    };
    console.log("email ", loginState.login.email);
    dispatch(deleteBook(input)).then(() => {
      dispatch(getAllBooks({ email: loginState.login.email }));
    });
  };

  let titleClick = (title, summ) => {
    setSummary(title + ": " + summ);
  };

  return (
    <div>
      <h1 className="text-center mt-2">Your Books</h1>
      <Container className="text-center mt-5">
        <Row>
          <Col sm={6} xs={12} className="mt-5">
            <div>
              <ListGroup as="ol">
                {mappedBooks.map((book) => (
                  <ListGroup.Item
                    as="li"
                    key={book._id}
                    className="d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div
                        className="fw-bold"
                        onClick={() => titleClick(book.title, book.summary)}
                      >
                        {book.title}
                      </div>
                      Rating: {book.rating} / 5
                    </div>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => deleteClick(book._id)}
                    >
                      delete
                    </Button>
                  </ListGroup.Item>
                  //<div key={book._id}> {book.title} </div>
                ))}
              </ListGroup>
            </div>
          </Col>
          <Col sm={6} xs={12} className="mt-5">
            <h3 text-center mt-2>
              {" "}
              Summary{" "}
            </h3>
            {summary}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BooksList;

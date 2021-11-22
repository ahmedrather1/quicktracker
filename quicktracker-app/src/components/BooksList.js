import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBooks, deleteBook } from "../redux/BooksListSlice";
import { ListGroup, Badge, Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

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
    setSummary("Click on a title to see its summary!");
    dispatch(deleteBook(input)).then(() => {
      dispatch(getAllBooks({ email: loginState.login.email }));
    });
  };

  let titleClick = (title, summ) => {
    setSummary(title + ": " + summ);
  };

  const TitleText = styled.div`
    cursor: pointer;
    color: #8860d0;
  `;

  const RatingText = styled.div`
    color: #5680e9;
  `;

  const listStyle = {
    cursor: "pointer",
    border: "1px solid #4390bc",
    backgroundColor: "#C1C8E4",
  };

  const HeadingText = styled.div`
    color: #5680e9;
  `;

  const SummaryText = styled.div`
    color: black;
  `;

  return (
    <div>
      <Row>
        <span>&nbsp;&nbsp;</span>
        <span>&nbsp;&nbsp;</span>
      </Row>
      <h1 className="text-center">Your Books</h1>
      <Container className=" mt-5">
        <Row>
          <Col sm={6} xs={12} className="mt-5">
            <div>
              <ListGroup as="ol">
                {mappedBooks.map((book) => (
                  <ListGroup.Item
                    as="li"
                    key={book._id}
                    className="d-flex justify-content-between align-items-start mt-2"
                    style={listStyle}
                    action
                    onClick={() => titleClick(book.title, book.summary)}
                  >
                    {/*<Card >*/}
                    <RatingText>
                      <TitleText
                        className="fw-bold"
                        onClick={() => titleClick(book.title, book.summary)}
                      >
                        {book.title}
                      </TitleText>
                      Rating: {book.rating} / 5
                    </RatingText>

                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => deleteClick(book._id)}
                    >
                      delete
                    </Button>
                    {/* </Card> */}
                  </ListGroup.Item>
                  //<div key={book._id}> {book.title} </div>
                ))}
              </ListGroup>
            </div>
          </Col>
          <Col sm={6} xs={12} className="mt-5">
            <HeadingText>
              <h3 className="text-center mt-2"> Summary </h3>
            </HeadingText>
            <SummaryText className="text-center mt-2">{summary}</SummaryText>
          </Col>
        </Row>
        <Row>
          <span>&nbsp;&nbsp;</span>
          <span>&nbsp;&nbsp;</span>
          <span>&nbsp;&nbsp;</span>
          <span>&nbsp;&nbsp;</span>
          <span>&nbsp;&nbsp;</span>
        </Row>
      </Container>
    </div>
  );
}

export default BooksList;

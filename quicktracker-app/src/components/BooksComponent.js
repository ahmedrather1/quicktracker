import React from "react";
import BooksList from "./BooksList";
import styled from "styled-components";

function BooksComponent() {
  const BookScreen = styled.div`
    background-color: #84ceeb;
  `;

  return (
    <BookScreen>
      <BooksList />
    </BookScreen>
  );
}

export default BooksComponent;

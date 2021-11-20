import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBooks } from "../redux/BooksListSlice";
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
        {mappedBooks.map((book) => (
          <div key={book._id}> {book.title} </div>
        ))}
      </div>
    </div>
  );
}

export default BooksList;

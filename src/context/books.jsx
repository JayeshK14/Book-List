import { createContext, useState } from 'react';
import axios from 'axios';

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  // Fetch books
  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books');
    const bookList = response.data;
    setBooks(bookList);
  };

  // Create a book
  const createBook = async (bookTitle) => {
    // Check if book title already exist
    const alreadyExisting = books.find((book) => {
      return book.title.toLowerCase() === bookTitle.toLowerCase();
    });
    if (alreadyExisting) return;

    // Store books in database
    const response = await axios.post('http://localhost:3001/books', {
      title: bookTitle,
    });

    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  //Edit a book
  const editBook = async (bookId, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${bookId}`, {
      title: newTitle,
    });

    const updatedBooks = books.map((book) => {
      if (book.id !== bookId) {
        return book;
      }

      return { ...book, ...response.data };
    });
    setBooks(updatedBooks);
  };

  // Delete a book
  const deleteBook = async (bookId) => {
    await axios.delete(`http://localhost:3001/books/${bookId}`);

    const updatedBooks = books.filter((book) => {
      return book.id !== bookId;
    });

    setBooks(updatedBooks);
  };

  const valueToShare = {
    books,
    fetchBooks,
    createBook,
    deleteBook,
    editBook,
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;

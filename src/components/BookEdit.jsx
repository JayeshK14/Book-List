import { useState } from 'react';
import useBooksContext from '../hooks/useBooksContext.jsx';

function BookEdit({ book, toggleForm }) {
  const [title, setTitle] = useState(book.title);

  const { editBook } = useBooksContext();

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editBook(book.id, title);
    toggleForm();
  };
  return (
    <form onSubmit={handleSubmit} className="book-edit">
      <label>Title</label>
      <input
        value={title}
        onChange={handleChange}
        className="input"
        type="text"
      />
      <button className="button is-primary">Save</button>
    </form>
  );
}

export default BookEdit;

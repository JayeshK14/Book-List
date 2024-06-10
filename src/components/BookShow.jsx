import { useState } from 'react';
import useBooksContext from '../hooks/useBooksContext.jsx';
import BookEdit from './BookEdit';

function BookShow({ book }) {
  const [showEdit, setShowEdit] = useState(false);

  const { deleteBook } = useBooksContext();

  const handleEdit = () => {
    setShowEdit(!showEdit);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit toggleForm={handleEdit} book={book} />;
  }

  const handleDelete = () => {
    deleteBook(book.id);
  };

  return (
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="book" />
      <div>{content}</div>
      <div className="actions">
        <button onClick={handleEdit} className="edit">
          Edit
        </button>
        <button onClick={handleDelete} className="delete">
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;

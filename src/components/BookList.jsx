import useBooksContext from '../hooks/useBooksContext.jsx';
import BookShow from './BookShow';

function BookList() {
  const { books } = useBooksContext();

  return (
    <div className="book-list">
      {books.map((book) => {
        return <BookShow book={book} key={book.id} />;
      })}
    </div>
  );
}

export default BookList;

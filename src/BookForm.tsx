import { useBook } from './BookContext';

const BookForm = () => {
  console.log('BookForm called');
  const { book, changeName } = useBook();

  return (
    <div>
      <h1>Book: {book.name}</h1>

      <input value={book.name} onChange={(e) => changeName(e.target.value)} />
    </div>
  );
};

export { BookForm };

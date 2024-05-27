import { useBook } from './BookContext';

const BookForm = () => {
  console.log('BookForm called');
  const { state } = useBook();

  return (
    <div>
      <h1>Book: {state.book.name}</h1>

      <input value={state.book.name} onChange={(e) => state.changeName(e.target.value)} />
    </div>
  );
};

export { BookForm };

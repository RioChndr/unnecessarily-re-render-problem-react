import { useBookDispatch, useBookState } from "./BookContext";

const BookForm = ({ id }: { id: string }) => {
  console.log('BookForm called ' + id);
  const state = useBookState();
  const dispatch = useBookDispatch();

  return (
    <div>
      <h1>Book: {state.book.name}</h1>

      <input value={state.book.name} onChange={(e) => dispatch.changeName(e.target.value)} />
    </div>
  );
};

const UseLessComponent = () => {
  console.log('UseLessComponent called');
  return <div>UseLessComponent</div>;
}

export { BookForm, UseLessComponent };

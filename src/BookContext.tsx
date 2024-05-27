import { createContext, ReactNode, useContext, useState } from 'react';

type Book = { name: string };

export interface BookContextState {
  theme: 'light' | 'dark';
  book: Book;
}

export interface BookContextDispatch {
  toggleTheme: () => void;
  changeName: (newName: string) => void;
}

export const BookContextState = createContext<BookContextState | null>(null);
export const BookContextDispatch = createContext<BookContextDispatch | null>(null);

export const useBookState = () => {
  console.log('useBook called');
  const value = useContext(BookContextState);

  if (!value) {
    throw new Error('🗣️ useBook hook used without BookContext');
  }

  return value;
};

export const useBookDispatch = () => {
  console.log('useBookDispatch called');
  const value = useContext(BookContextDispatch);

  if (!value) {
    throw new Error('🗣️ useBookDispatch hook used without BookContext');
  }

  return value;
}

export const BookContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [book, setBook] = useState<Book>({ name: '' });

  const toggleTheme = () => {
    setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));
  }

  const dispatchValue: BookContextDispatch = { toggleTheme, changeName: (name: string) => setBook((book) => ({ ...book, name })) };
  const stateValue: BookContextState = { theme, book };

  return <BookContextDispatch.Provider value={dispatchValue}>
    <BookContextState.Provider value={stateValue}>
      {children}
    </BookContextState.Provider>
  </BookContextDispatch.Provider>
};


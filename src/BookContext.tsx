import { createContext, ReactNode, useContext, useState } from 'react';

type Book = { name: string };

export interface BookContextState {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  book: Book;
  changeName: (newName: string) => void;
}

export type BookContextValue = {
  state: BookContextState;
};

const BookContext = createContext<BookContextValue | null>(null);

const useBook = () => {
  console.log('useBook called');
  const value = useContext(BookContext);

  if (!value) {
    throw new Error('🗣️ useBook hook used without BookContext');
  }

  return value;
};

export { BookContext, useBook };
export type { Book };

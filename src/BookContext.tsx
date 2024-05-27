import { createContext, ReactNode, useContext, useState } from 'react';

type Book = { name: string };

type BookContextValue = {
  book: Book;
  changeName: (newName: string) => void;
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

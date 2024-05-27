import { useState } from 'react';
import { Book, BookContext } from './BookContext';
import { BookForm } from './BookForm';
import './App.css';

type Theme = 'light' | 'dark';

export const App = () => {
  console.log('App called');
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));
  };

  const [book, setBook] = useState<Book>({ name: '' });

  const changeName = (name: string) => {
    setBook((book) => ({ ...book, name }));
  };

  const value = { book, changeName };

  return (
    <BookContext.Provider value={value}>
      <main className={theme}>
        <ToggleThemeButton theme={theme} toggleTheme={toggleTheme} />
        <BookForm />
      </main>
    </BookContext.Provider>
  );
};

const ToggleThemeButton = ({
  theme,
  toggleTheme,
}: {
  theme: Theme;
  toggleTheme: () => void;
}) => {
  console.log('ToggleThemeButton called');
  return (
    <button onClick={toggleTheme}>{theme === 'light' ? '🌚' : '🌝'}</button>
  );
};

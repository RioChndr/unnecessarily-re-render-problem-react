import { useMemo, useState } from 'react';
import { Book, BookContext, BookContextState, BookContextValue, useBook } from './BookContext';
import { BookForm } from './BookForm';
import './App.css';

type Theme = 'light' | 'dark';

const useBookState = (): BookContextState => {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));
  };

  const [book, setBook] = useState<Book>({ name: '' });

  const changeName = (name: string) => {
    setBook((book) => ({ ...book, name }));
  };

  return {
    theme,
    toggleTheme,
    book,
    changeName,
  }
}

const useInitState = (): BookContextValue => {
  const state = useBookState()
  console.log('useInitState called')
  return {
    state: state
  }
}

export const App = () => {
  console.log('App called')
  const initVal = useInitState();
  return (
    <BookContext.Provider value={initVal}>
      <main className={initVal.state.theme}><MainPage /></main>
    </BookContext.Provider>
  );
};

const MainPage = () => {
  const { state } = useBook();
  return <>
    <ToggleThemeButton theme={state.theme} toggleTheme={state.toggleTheme} />
    <BookForm />
  </>
}

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

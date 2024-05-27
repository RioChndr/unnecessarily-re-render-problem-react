import './App.css';
import { BookContextProvider, useBookDispatch, useBookState } from './BookContext';
import { BookForm, UseLessComponent } from './BookForm';

type Theme = 'light' | 'dark';


export const App = () => {
  console.log('App called')
  return (
    <BookContextProvider>
      <MainLayout />
    </BookContextProvider>
  );
};

const MainLayout = () => {
  return <main ><MainPage /></main>
}

const MainPage = () => {
  const state = useBookState();
  const dispatch = useBookDispatch();
  return <>
    <ToggleThemeButton theme={state.theme} toggleTheme={dispatch.toggleTheme} />
    <BookForm id={"1"} />
    <BookForm id={"2"} />
    <UseLessComponent />
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

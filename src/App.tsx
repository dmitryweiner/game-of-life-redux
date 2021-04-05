import React, { useEffect } from 'react';
import './App.css';
import Field from './components/Field';
import ControlPanel from './components/ControlPanel';
import { useDispatch, useSelector } from 'react-redux';
import { ACTION_TYPES, Store } from './store';
import Rules from './components/Rules';

function App() {
  const dispatch = useDispatch();
  const isRunning = useSelector((state: Store) => state.isRunning);

  useEffect(() => {
    let intervalId: ReturnType<typeof setTimeout>;
    if (isRunning) {
      intervalId = setInterval(() => {
        dispatch({ type: ACTION_TYPES.GET_NEXT });
      }, 500);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning, dispatch]);

  return (
    <div className="App">
      <h1>Игра "Жизнь"</h1>
      <p>
        Сделана по{' '}
        <a href="https://ru.wikipedia.org/wiki/%D0%98%D0%B3%D1%80%D0%B0_%C2%AB%D0%96%D0%B8%D0%B7%D0%BD%D1%8C%C2%BB">
          этой инструкции
        </a>{' '}
        c применением библиотеки <a href="https://redux.js.org/">Redux</a>.
      </p>
      <Rules />
      <ControlPanel />
      <Field />
      <div>
        <a href="https://github.com/dmitryweiner/">&copy; Дмитрий Вайнер</a>,{' '}
        <a href="https://github.com/dmitryweiner/game-of-life-redux/">исходный код</a>
      </div>
    </div>
  );
}

export default App;

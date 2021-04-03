import { useDispatch, useSelector } from 'react-redux';
import { ACTION_TYPES, Store } from '../store';
import styles from './ControlPanel.module.css';

export default function ControlPanel() {
  const dispatch = useDispatch();
  const isRunning = useSelector((state: Store) => state.isRunning);

  return (
    <div className={styles.wrapper}>
      <button onClick={() => dispatch({ type: ACTION_TYPES.START_STOP })}>
        {isRunning ? 'Стоп' : 'Старт'}
      </button>
      <button disabled={isRunning} onClick={() => dispatch({ type: ACTION_TYPES.RESET })}>
        Сброс
      </button>
      <button disabled={isRunning} onClick={() => dispatch({ type: ACTION_TYPES.SET_RANDOM })}>
        Random
      </button>
    </div>
  );
}

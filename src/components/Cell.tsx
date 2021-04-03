import { LIVE, DEAD } from '../field';
import styles from './Cell.module.css';
import { useDispatch } from 'react-redux';
import { ACTION_TYPES } from '../store';

type CellProps = {
  status: typeof DEAD | typeof LIVE;
  row: number;
  column: number;
};

export default function Cell({ status, row, column }: CellProps) {
  const dispatch = useDispatch();
  function getClassName() {
    let result = styles.cell;
    if (status === LIVE) {
      result += ' ' + styles.live;
    }
    return result;
  }

  function handleClick() {
    dispatch({
      type: ACTION_TYPES.CHANGE_CELL,
      payload: {
        row,
        column
      }
    });
  }

  return <div className={getClassName()} onClick={handleClick} />;
}

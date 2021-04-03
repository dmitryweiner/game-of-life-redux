import { useSelector } from 'react-redux';
import { Store } from '../store';
import styles from './Field.module.css';
import Cell from './Cell';

export default function Field() {
  const field = useSelector((state: Store) => state.field);
  return (
    <div className={styles.wrapper}>
      {field.map((row, rowIndex) => (
        <div className={styles.row} key={rowIndex}>
          {row.map((status, column) => (
            <Cell status={status} row={rowIndex} column={column} key={column} />
          ))}
        </div>
      ))}
    </div>
  );
}

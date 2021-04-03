import { changeCell, DEAD, getEmptyField, getNextField, HEIGHT, LIVE, WIDTH } from './field';
import { DEFAULT_RULES } from './store';

test('Проверка генерации пустого поля', () => {
  const field = getEmptyField();
  expect(field.length).toBe(HEIGHT);
  expect(field[0].length).toBe(WIDTH);
  expect(field[0][0]).toBe(DEAD);
});

test('Проверка функции получения следующего состояния', () => {
  const field = getEmptyField();
  field[0][1] = LIVE;
  field[1][1] = LIVE;
  field[2][1] = LIVE;
  const result = getNextField(field, DEFAULT_RULES);

  //console.log(result[0]);
  //console.log(result[1]);
  //console.log(result[2]);
  expect(result[1][0]).toBe(LIVE);
  expect(result[1][1]).toBe(LIVE);
  expect(result[1][2]).toBe(LIVE);
});

test('Проверка изменения одной клетки', () => {
  const field = getEmptyField();
  const result = changeCell(field, 1, 1);
  expect(result[1][1]).toBe(LIVE);
});

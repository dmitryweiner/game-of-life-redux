import {
  changeCell,
  DEAD,
  getEmptyField, getFieldWithGliders,
  getNextField,
  getRandomField,
  HEIGHT,
  LIVE,
  WIDTH
} from './field';
import { DEFAULT_RULES } from './field';

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

  expect(result[1][0]).toBe(LIVE);
  expect(result[1][1]).toBe(LIVE);
  expect(result[1][2]).toBe(LIVE);
});

test('Проверка изменения одной клетки', () => {
  const field = getEmptyField();
  const result = changeCell(field, 1, 1);
  expect(result[1][1]).toBe(LIVE);
});

test('Проверка генерации рандомного поля', () => {
  const field = getRandomField();
  expect(field.length).toBe(HEIGHT);
  expect(field[0].length).toBe(WIDTH);
  expect(field[0][0]).not.toBeUndefined();
});

test('Проверка генерации поля с глайдерами', () => {
  const field = getFieldWithGliders();
  expect(field.length).toBe(HEIGHT);
  expect(field[0].length).toBe(WIDTH);
  expect(field[3][4]).toBe(LIVE);
});

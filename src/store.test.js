import { ACTION_TYPES, reducer } from './store';
import { DEAD, LIVE } from './field';

test('тест экшена ActionChangeRules', () => {
  const action = {
    type: ACTION_TYPES.CHANGE_RULES,
    payload: {
      live: [0, 0, 1, 1, 0, 0, 0, 0, 1],
      dead: [0, 0, 0, 1, 0, 0, 0, 0, 1]
    }
  };

  const store = reducer(undefined, action);
  expect(store.rules.dead.length).toBe(9);
  expect(store.rules.live.length).toBe(9);
  expect(store.rules.dead[8]).toBe(LIVE);
  expect(store.rules.live[8]).toBe(LIVE);
  expect(store.rules.dead[7]).toBe(DEAD);
  expect(store.rules.live[7]).toBe(DEAD);
});

test('тест экшена ActionStartStop', () => {
  const action = {
    type: ACTION_TYPES.START_STOP
  };
  let store = reducer(undefined, action);
  expect(store.isRunning).toBeTruthy();
  store = reducer(store, action);
  expect(store.isRunning).toBeFalsy();
});

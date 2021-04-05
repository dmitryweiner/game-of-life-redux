import {
  changeCell,
  DEFAULT_RULES,
  Field,
  getEmptyField,
  getFieldWithGliders,
  getNextField,
  getRandomField,
  Rules
} from './field';
import { createStore } from 'redux';

export enum ACTION_TYPES {
  GET_NEXT,
  RESET,
  SET_RANDOM,
  CHANGE_CELL,
  CHANGE_RULES,
  START_STOP
}

type ActionGetNext = {
  type: ACTION_TYPES.GET_NEXT;
};

type ActionReset = {
  type: ACTION_TYPES.RESET;
};

type ActionSetRandom = {
  type: ACTION_TYPES.SET_RANDOM;
};

type ActionChangeCell = {
  type: ACTION_TYPES.CHANGE_CELL;
  payload: {
    row: number;
    column: number;
  };
};

type ActionChangeRules = {
  type: ACTION_TYPES.CHANGE_RULES;
  payload: Rules;
};

type ActionStartStop = {
  type: ACTION_TYPES.START_STOP;
};

type Action =
  | ActionChangeCell
  | ActionGetNext
  | ActionSetRandom
  | ActionReset
  | ActionChangeRules
  | ActionStartStop;

export type Store = {
  isRunning: boolean;
  rules: Rules;
  field: Field;
};

export const initialState: Store = {
  isRunning: false,
  rules: DEFAULT_RULES,
  field: getFieldWithGliders()
};

export function reducer(state = initialState, action: Action): Store {
  switch (action.type) {
    case ACTION_TYPES.GET_NEXT:
      return {
        ...state,
        field: getNextField(state.field, state.rules)
      };
    case ACTION_TYPES.CHANGE_CELL:
      return {
        ...state,
        field: changeCell(state.field, action.payload.row, action.payload.column)
      };
    case ACTION_TYPES.RESET:
      return {
        ...state,
        field: getEmptyField()
      };
    case ACTION_TYPES.SET_RANDOM:
      return {
        ...state,
        field: getRandomField()
      };
    case ACTION_TYPES.CHANGE_RULES:
      return {
        ...state,
        rules: action.payload
      };
    case ACTION_TYPES.START_STOP:
      return {
        ...state,
        isRunning: !state.isRunning
      };
    default:
      return state;
  }
}

const store = createStore(reducer);
export default store;

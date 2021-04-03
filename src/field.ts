export const WIDTH = 19;
export const HEIGHT = 19;
export const LIVE = 1;
export const DEAD = 0;

export type Status = typeof DEAD | typeof LIVE;

export type Field = Status[][];

export type Rules = {
  live: Status[];
  dead: Status[];
};

export const DEFAULT_RULES = {
  live: [0, 0, 1, 1, 0, 0, 0, 0, 0] as Status[],
  dead: [0, 0, 0, 1, 0, 0, 0, 0, 0] as Status[]
};

const NEIGHBORING_CELLS = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [1, -1],
  [1, 0],
  [1, 1],
  [0, 1],
  [0, -1]
];

export function getEmptyField(): Field {
  const field: Field = [];
  for (let i = 0; i < HEIGHT; i++) {
    field[i] = [];
    for (let j = 0; j < WIDTH; j++) {
      field[i][j] = DEAD;
    }
  }
  return field;
}

export function getNextField(field: Field, rules: Rules) {
  const result: Field = [];
  for (let i = 0; i < HEIGHT; i++) {
    result[i] = [];
    for (let j = 0; j < WIDTH; j++) {
      const count = NEIGHBORING_CELLS.reduce((sum, diff) => {
        let x = i - diff[0];
        let y = j - diff[1];

        if (x < 0) x = HEIGHT - 1;
        if (y < 0) y = WIDTH - 1;
        if (x >= HEIGHT) x = 0;
        if (y >= WIDTH) y = 0;

        return sum + field[x][y];
      }, 0);

      if (field[i][j] === DEAD) {
        result[i][j] = rules.dead[count];
      } else {
        result[i][j] = rules.live[count];
      }
    }
  }
  return result;
}

export function changeCell(field: Field, row: number, column: number): Field {
  const newCell = field[row][column] === DEAD ? LIVE : DEAD;
  field[row] = [...field[row]];
  field[row][column] = newCell;
  return [...field];
}

export function getRandomField(): Field {
  const field: Field = [];
  for (let i = 0; i < HEIGHT; i++) {
    field[i] = [];
    for (let j = 0; j < WIDTH; j++) {
      field[i][j] = Math.random() > 0.5 ? LIVE : DEAD;
    }
  }
  return field;
}

import { useDispatch, useSelector } from 'react-redux';
import { ACTION_TYPES, Store } from '../store';
import { DEAD, LIVE, Status } from '../field';

export default function Rules() {
  const rules = useSelector((state: Store) => state.rules);
  const dispatch = useDispatch();
  const isRunning = useSelector((state: Store) => state.isRunning);

  function clickHandler(deadOrAlive: Status, index: number) {
    if (deadOrAlive === DEAD) {
      rules.dead[index] = rules.dead[index] === DEAD ? LIVE : DEAD;
    } else {
      rules.live[index] = rules.live[index] === DEAD ? LIVE : DEAD;
    }
    dispatch({
      type: ACTION_TYPES.CHANGE_RULES,
      payload: { ...rules }
    });
  }

  return (
    <>
      <div>
        Dead:
        {rules.dead.map((rule, ruleIndex) => (
          <input
            key={ruleIndex}
            type="checkbox"
            disabled={isRunning}
            onChange={() => clickHandler(DEAD, ruleIndex)}
            checked={rule === LIVE}
          />
        ))}
      </div>
      <div>
        Live:
        {rules.live.map((rule, ruleIndex) => (
          <input
            key={ruleIndex}
            type="checkbox"
            disabled={isRunning}
            onChange={() => clickHandler(LIVE, ruleIndex)}
            checked={rule === LIVE}
          />
        ))}
      </div>
    </>
  );
}

import { counterActions } from '../store/counter';
import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const counter = useSelector(state => state.counter.counter);
  const showCounter = useSelector(state => state.counter.showCounter);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  }

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  }

  const handleIncrease = () => {
    dispatch(counterActions.increase(5));
  }

  const handleToggle = () => {
    dispatch(counterActions.toggle());
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleIncrease}>Increment By 5</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <button onClick={handleToggle}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

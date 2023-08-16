import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './features/counterSlice';

function App() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Simple Redux Counter</h1>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
}

export default App;
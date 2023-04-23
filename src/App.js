import React from 'react'
import { useSelector ,useDispatch} from 'react-redux';
import {inc,dec} from './features/counterSlice.js'

const App = () => {
  const dispatch=useDispatch()
  const counter=useSelector(state=>state.counter.counter)
  return (
    <div>
      <button
        onClick={() => {
          dispatch(inc());
        }}
      >
        Inc
      </button>
      <div>{counter}</div>
      <button
        onClick={() => {
          dispatch(dec());
        }}
      >
        Dec
      </button>
    </div>
  );
}

export default App
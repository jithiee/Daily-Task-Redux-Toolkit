import React from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { decrease_count, increase_count } from '../Redux/count/countSlice';
const Counter = () => {

    const count = useSelector(state => state.count.value)
    const color = useSelector(state => state.color.value)

    const dispatch = useDispatch()
    const increment =() =>{
        dispatch(increase_count())
    }
    const decrement = ()=>{
      dispatch (decrease_count())
    }


  return (
    <>
    <h4 style={{color:color}}>
    Counter =  {count}
    </h4>
    <button onClick={increment}  style={{color:color}}>Increase count</button>
    <button style={{marginLeft:'10px',color:color}}  onClick={decrement} >Decrease count</button>

    </>
  );
}

export default Counter;

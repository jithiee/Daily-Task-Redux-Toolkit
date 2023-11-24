import React from 'react';
import { useDispatch } from 'react-redux';
import {useSelector } from 'react-redux/es/hooks/useSelector';
import {change_color} from "../Redux/color/colorSlice"
import randomColor from "randomcolor"



const Colors = () => {

    const  color = useSelector(state => state.color.value)
    const count = useSelector(state => state.count.value)

    const dispatch =  useDispatch()
    const changecolor = ()=>{
        dispatch(change_color({
            color:randomColor()
        }))

    }



  return (
    <>
    <h2 style={{color:color}}>
Colors
    </h2>
    <h3 style={{color:color}}>counting = {count}</h3>
    <button style={{color:color}} onClick={changecolor}>Color Change</button>
    </>
  );
}

export default Colors;

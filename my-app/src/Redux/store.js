import {configureStore } from '@reduxjs/toolkit'
import colorsReducer from './color/colorSlice'
import countReducer from './count/countSlice'

export default configureStore({
    reducer:{
        color:colorsReducer,
        count:countReducer,
    }
})
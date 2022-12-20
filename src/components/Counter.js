import React from 'react'
import {plusValue, minusValue} from '../redux/actions-creater';
import { useSelector, useDispatch } from 'react-redux';
const Counter = () => {
    const mystate = useSelector(state => state.ourState.count);
    const disPatch = useDispatch()
  return (
    <div className='flex gap-3 w-1/6 justify-center items-center'>
        <button onClick={() => disPatch(minusValue())} className='bg-red-700 text-white flex hover:bg-red-900 px-5 py-1 rounded text-4xl'>-</button>
        <h1 className='font-black text-3xl'>{mystate}</h1>
        <button onClick={() => disPatch(plusValue())}  className='bg-green-700 text-white flex hover:bg-green-900 px-5 py-1 rounded text-4xl'>+</button>
    </div>
  )
}

export default Counter

import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './slice/counterSlice'
import { useState } from 'react'

function App() {
  const count = useSelector((state) => state.counters.value)
  const dispatch = useDispatch()

  const handleincrement = () => {
    console.log(count);
    dispatch(increment())
  }
  const handledecrement = () => {
    console.log(count);
    dispatch(decrement())
  }

  return (
    <>
      <div className='bg-black w-[500px] h-[500px] m-auto mt-[150px] flex items-center justify-center rounded-2xl shadow-lg'>
        <div className='text-white text-center'>
          <p className='rounded-2xl bg-yellow-400 text-white py-[13px] px-[30px] mb-[30px]'>
            count: {count}
          </p>
          <div className='space-x-[10px]'>
            <button
              className='bg-green-400 py-[12px] px-[25px] rounded-2xl hover:bg-green-500'
              onClick={handleincrement}
            >
              Increment
            </button>
            <button
              className='bg-red-400 py-[12px] px-[25px] rounded-2xl hover:bg-red-500'
              onClick={handledecrement}
            >
              Decrement
            </button>
          </div>
        </div>
      </div>

    </>
  )
}

export default App

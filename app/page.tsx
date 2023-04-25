"use client";

import React, { useState } from 'react'

export default function Home() {
  const [count, setCount] = useState(0);
  // incrementHandler
  const incrementHander = () => {
    setCount(prevCount => prevCount + 1)

  }

  const decrementHander = () => {
    setCount(prevCount => prevCount - 1)
  }
  return (
    <main className=' h-screen flex justify-center items-center text-center'>
      <div>
        <div className=' text-2xl font-bold'>{count}</div>
        <div className=' mt-10 space-x-6'>
          <button onClick={incrementHander} className=' border border-slate-300 px-4 py-1'>Increment</button>
          <button onClick={decrementHander} className=' border border-slate-300 px-4 py-1'>Decreament</button>
        </div>
      </div>
    </main>
  )
}

import React from 'react'
import { useState } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0)

  const addValue = ()=>{
    {counter<20 && setCounter(counter + 1)}
  }

  const subValue = ()=>{
    {counter>0 && setCounter(counter - 1)}
  }
  return (
    <div>
      <div className='count'>
        value is: {counter}
      </div>
      <div className='buttons'>
      <button onClick={addValue} className='Increase'>Increment</button>
      <button onClick={subValue} className='Decrease'>Decrement</button>
     </div>
    </div>
  )
}

export default App
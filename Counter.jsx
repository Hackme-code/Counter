import React, {useState} from 'react'
function Counter(){
    const [count, setCount] = useState(0)
    const [color, setColor] = useState('text-red-700')

    const increment = ()=>{
       {count<20 && setCount(count + 1)} 
       setColor('text-green-700')
    }
    const decrement = ()=>{
        {count>0 && setCount(count - 1)} 
        setColor('text-red-700')
    }
    const reset = ()=>{
        setCount(0)
        setColor('text-red-500')
    }
    return (
        <>
        <div className='maindiv'>
        <div className= {`text-center text-3xl m-40 ${color}`}>
            Count: {count}
        </div>

        <div className='text-white text-center px-5 space-x-9 '>
            <button onClick={increment} className='increment flashing- border border-solid rounded-lg bg-gray-700 p-3'>Increment</button>
            <button onClick={reset} className='reset flashing- border bg-gray-700 rounded-lg p-3'>Reset</button>
            <button onClick={decrement} className='decrement flashing- border bg-gray-700 rounded-lg p-3'>Decrement</button>
        </div>
        </div>
        </>
        
    );
}
export default Counter
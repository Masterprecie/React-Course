import React, { useState } from 'react'

const UseStateCounter = () => {

	const [value, setValue] = useState(0);

	const reset = () => {
	setValue(0)
	}
  return (
	  <>
		  <section style={{margin: '4rem 0'}}>
			  <h2>Regular Counter</h2>
			  <h1>{value}</h1>
			  <button onClick={() => setValue (value -1)}>Decrease</button>
			  {/* <button onClick={() => setValue (0)}>Reset</button> or we can pass the onlicck function this way */}
			  <button onClick={reset}>Reset</button>
			  <button onClick={() => setValue (value + 1)}>Increase</button>
		  </section>  
	 </>
  ) 
}

export default UseStateCounter
import React, { useState } from 'react'

const UseState = () => {
//usestate is used to render co0
//note text can be any naming convention of your choice
	const [text, setText] = useState('Precious');
	const handleClick = () => {
		//set a consitional that allows the text to change whenever the user clicks on the button
		if (text === 'Precious')
			setText('Ikpa');
		else
			setText('Precious')
	};
  return (
	  <div>
		  <h1>{text}</h1>
		  <button onClick={handleClick}>Change Name</button>
	  </div>
  )
}

export default UseState
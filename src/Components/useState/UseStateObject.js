import React, { useState } from 'react'

const UseStateObject = () => {
	const [person, setPerson] = useState({
		name: 'Precious',
		age: 25,
		message: 'Hello React',
	});
	//console.log(person);
	const changeMessage = () => {
		//using the spread operator i.e, do not affect the other values, change just the message value
		setPerson({ ...person, message: 'Welcome Precious' });
	};

	//Alternatively we can assign each of these object values a seperate state individually, here's the solution;

	// const [name, setName] = useState('Precious');
	// const [age, setAge] = useState(25);
	// const [message, setMessage] = useState('Welcome Precious');
	
	// const changeMessage = () => {
	// 	setMessage('Hello React');
	// };

  return (
	  <div>
		  <h3>{person.name}</h3>
		  <h3>{person.age}</h3>
		  <h3>{person.message}</h3>
		  <button onClick={changeMessage}>Change Message</button>
	 </div>
	  
	  //here you call the values individually
	//   <div>
	// 	  <h3>{name}</h3>
	// 	  <h3>{age}</h3>
	// 	  <h3>{message}</h3>
	// 	  <button onClick={changeMessage}>Change Message</button>
	//  </div>
  )
}

export default UseStateObject
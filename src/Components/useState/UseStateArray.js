import React, { useState } from 'react'
import { data } from '../../data';

const UseStateArray = () => {
	const [people, setPeople] = useState(data)


	const removeItem = (id) => {
		let newPeople = people.filter((person) => person.id !== id);
		setPeople(newPeople);
	};


  return (
	  <>
		  {people.map((person) => {
			  //console.log(person);
			  const { id, name } = person;
			  return (
				  <div key={id}>
					  <h4>{name}</h4>
					  <button onClick={() => removeItem(id)}>remove Item</button>
				  </div>
			  );
		  })}
		  {/* passing an onClick inline function */}
		  <button onClick={() => setPeople([])}> clear Items</button>
		
	 </>
  )
}

export default UseStateArray
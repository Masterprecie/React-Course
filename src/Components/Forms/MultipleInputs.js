import React, { useState } from 'react'

const MultipleInputs = () => {
	const initialValue = {
		firstName: '',
		lastName: '',
		age: '',
		email:''		
	}
	const [person, setPerson] = useState({initialValue})
	const [people, setPeople] = useState([])

	const handleChange = (e) => {
		const { name, value } = e.target;
		setPerson({ ...person, [name]: value })
		console.log(person);
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (person.firstName && person.lastName && person.age && person.email) {
			const newPerson = { ...person,id: new Date().getTime().toString()};
			setPeople([...people, newPerson])
			setPerson(initialValue);
		}
	}

  return (
	  <article>
		  <form className='form'>
			  <div className='form-control'>
				  <label htmlFor='firstName'>Name: </label>
				  <input
					  type='text'
					  id='firstName'
					  name='firstName'
					  value={person.firstName}
					  onChange={handleChange}
				  />
			  </div>
			  <div className='form-control'>
				  <label htmlFor='lastName'>Last Name: </label>
				  <input
					  type='text'
					  id='lastName'
					  name='lastName'
					  value={person.lastName}
					  onChange={handleChange}
				  />
			  </div>
			  <div className='form-control'>
				  <label htmlFor='Age'>Age: </label>
				  <input
					  type='text'
					  id='age'
					  name='age'
					  value={person.age}
					  onChange={handleChange}
				  />
			  </div>
			  <div className='form-control'>
				  <label htmlFor='email'>Email: </label>
				  <input
					  type='text'
					  id='email'
					  name='email'
					  value={person.email}
					  onChange={handleChange}
				  />
			  </div>
		  <button type='submit' onClick={handleSubmit}>Add Person</button>
		  </form>
	  <article>
			  {people.map((person) => {
				  const { id, firstName, email, lastName, age } = person;
				  return (
					  <div key={id} className='item'>
						  <h4>{firstName}</h4>
						  <h4>{lastName}</h4>
						  <p>{age}</p>
						  <p>{email}</p>
					</div>
					)
			  })}
	  </article>
	  </article>
	  
  )
}

export default MultipleInputs
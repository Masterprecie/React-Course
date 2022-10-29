import React, { useEffect, useState } from 'react'
import '../useEffect/useEffect.css'

const url = 'https://api.github.com/users'

const useEffectBasics = () => {

	const [users, setUsers] = useState([]);

	const getUsers = async () => {
		const response = await fetch(url);
		const users = await response.json();
		setUsers(users);
		console.log(users);
	}

	useEffect(() => {
		getUsers();
	}, []);
	
	return (
		<>
			<h3 className='text-center'> Github Users </h3>
			<ul className='users'>
				{users.map((user) => {
					const { id, login, avatar_url, html_url } = user;
					return (
						<li key={id}>
							<img src={avatar_url} alt={login} />
							<div>
								<h4>{login}</h4>
								<a href={html_url}>profile</a>
							</div>
						</li>
					);
				})}
			</ul>
		</>
	);


// 	const [value, setValue] = useState(0)
// //useEffect runs after every re-render
// 	useEffect(() => {
// 		console.log('call useEffect');
// 		if (value >= 1) {
// 			document.title = `New mesage (${value})`;
// 		}
// 	},[value]);
// 	console.log('render component');

//   return (
// 	 <>
// 		  <h1>{value}</h1>
// 		  <button onClick={() => setValue(value + 1) }>click me</button>
// 	  </>
//   )
}

export default useEffectBasics
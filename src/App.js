import React, { useRef, useState, useMemo } from 'react';

const App = () => {
	const [data, setData] = useState([])
	const [query, setQuery] = useState('')
	const ref = useRef()

	const filtered = useMemo(() => {
		return data.filter(item => item.toLowerCase().includes(query))
	}, [query, data])

	const submit = (e) => {
		e.preventDefault()
		const {value} = ref.current;
		if(value === '') return;
		setData(prevState => ([...prevState, value]))
		ref.current.value = ''
	}

	const handleChange = (e) => {
		let id;
		if(id) clearTimeout(id)
		id = setTimeout(() => setQuery(e.target.value), 100)
	}

  	return (
		<div style={{width: 500, margin: 'auto'}} >
			<h3>Search </h3> 
			<input onChange={handleChange} type='text'/>	
			<h3>Add</h3>
			<form onSubmit={submit}>
				<input ref={ref} type='text'/>
				<button type='submit'>Add items</button>
			</form>
			<h3>Items</h3>
			<div>
				{filtered.map((item, i) => (
					<p key={item + i}>{item}</p>
				) )}
			</div>
		
		</div>
  	);
}

export default App;
